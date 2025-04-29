import React, { useState } from 'react';
import Login from './components/Login';
import Tabs from './components/Tabs';

function App() {
  const [macroVersion, setMacroVersion] = useState('');
  const [allowedSheets, setAllowedSheets] = useState([]);
  const [serverData, setServerData] = useState({});

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8">Falline's Server Browser - Arise Crossover</h1>
      {!macroVersion ? (
        <Login
          setMacroVersion={setMacroVersion}
          setAllowedSheets={setAllowedSheets}
          setServerData={setServerData}
        />
      ) : (
        <Tabs
          allowedSheets={allowedSheets}
          serverData={serverData}
        />
      )}
    </div>
  );
}

export default App;
