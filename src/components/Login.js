import React, { useState } from 'react';

function Login({ setMacroVersion, setAllowedSheets, setServerData }) {
  const [accessKey, setAccessKey] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/verifyKey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessKey }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setMacroVersion(data.macroVersion);
      setAllowedSheets(data.sheetsAllowed);
      setServerData(data.servers);

    } catch (err) {
      setError('Error connecting to server.');
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Enter Access Key"
        value={accessKey}
        onChange={(e) => setAccessKey(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Continue
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
}

export default Login;
