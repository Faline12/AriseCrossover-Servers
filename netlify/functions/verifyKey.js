const { google } = require('googleapis');

exports.handler = async function(event, context) {
  try {
    const body = JSON.parse(event.body);
    const { accessKey } = body;

    // ✅ 환경변수에서 불러오기
    const API_KEY = process.env.API_KEY;
    const LICENSE_SHEET_ID = process.env.LICENSE_SHEET_ID;
    const SERVER_SHEET_ID = process.env.SERVER_SHEET_ID;

    const sheets = google.sheets({ version: 'v4', auth: API_KEY });

    // 1. License Manager 읽기
    const licenseRes = await sheets.spreadsheets.values.get({
      spreadsheetId: LICENSE_SHEET_ID,
      range: 'ServerBrowser!A:B'
    });
    const licenseData = licenseRes.data.values || [];
    const found = licenseData.find(row => row[1] === accessKey);

    if (!found) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Invalid Access Key' }),
      };
    }

    const userMacroVersion = found[0];

    // 2. Server Manager Permissions 읽기
    const permissionRes = await sheets.spreadsheets.values.get({
      spreadsheetId: SERVER_SHEET_ID,
      range: 'Permissions!A:B'
    });
    const permissionData = permissionRes.data.values || [];
    const permissionFound = permissionData.find(row => row[0] === userMacroVersion);

    if (!permissionFound) {
      return {
        statusCode: 403,
        body: JSON.stringify({ message: 'No permissions found' }),
      };
    }

    const sheetsAllowed = permissionFound[1].split(',').map(s => s.trim());

    // 3. 서버 리스트 읽기
    const servers = {};
    for (let sheetName of sheetsAllowed) {
      const serverRes = await sheets.spreadsheets.values.get({
        spreadsheetId: SERVER_SHEET_ID,
        range: `${sheetName}!A:B`
      });
      servers[sheetName] = serverRes.data.values || [];
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ macroVersion: userMacroVersion, sheetsAllowed, servers }),
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server Error' }),
    };
  }
};
