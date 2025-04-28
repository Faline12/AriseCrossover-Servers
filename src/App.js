import React, { useState } from 'react';
import Login from './components/Login';
import Tabs from './components/Tabs';

function App() {
  const [macroVersion, setMacroVersion] = useState('');
  const [allowedSheets, setAllowedSheets] = useState([]);
  const [serverData, setServerData] = useState({});

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-3xl font-bold mb-8">Holo Graphics</h2>
        <ul className="space-y-6">
          <li className="text-lg hover:text-purple-400"><a href="#">Home</a></li>
          <li className="text-lg hover:text-purple-400"><a href="#">Artist</a></li>
          <li className="text-lg hover:text-purple-400"><a href="#">Work</a></li>
          <li className="text-lg hover:text-purple-400"><a href="#">Contact</a></li>
          <li className="text-lg hover:text-purple-400"><a href="#">About</a></li>
        </ul>
        <button className="mt-8 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-800">Create Art</button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-12 text-center text-white">
        <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Beyond Imagen</h1>
        
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

        {/* Image Section */}
        <div className="mt-16 relative inline-block">
          <img src="/path-to-your-image.jpg" alt="3D Artwork" className="w-96 h-96 object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500" />
          <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-800">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
