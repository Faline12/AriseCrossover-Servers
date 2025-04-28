import React from 'react';

function ServerList({ servers }) {
  return (
    <div className="flex flex-col space-y-4">
      {servers.map((server, index) => (
        <div key={index} className="flex justify-between items-center bg-white p-4 rounded shadow">
          <span>{server[0]}</span>
          <a
            href={server[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Go
          </a>
        </div>
      ))}
    </div>
  );
}

export default ServerList;
