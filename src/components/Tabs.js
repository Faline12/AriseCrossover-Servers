import React, { useState } from 'react';
import ServerList from './ServerList';

function Tabs({ allowedSheets, serverData }) {
  const [activeTab, setActiveTab] = useState(allowedSheets[0]);

  return (
    <div className="w-full">
      <div className="flex space-x-4 border-b mb-6">
        {allowedSheets.map(sheet => (
          <button
            key={sheet}
            className={`pb-2 ${activeTab === sheet ? 'border-b-2 border-blue-500 text-blue-600' : ''}`}
            onClick={() => setActiveTab(sheet)}
          >
            {sheet}
          </button>
        ))}
      </div>
      <ServerList servers={serverData[activeTab]} />
    </div>
  );
}

export default Tabs;
