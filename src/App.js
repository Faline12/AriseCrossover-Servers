// src/App.js

import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-discordDark text-gray-900 dark:text-white">
      {/* Dark Mode Toggle Button */}
      <DarkModeToggle />

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-discordDark p-4">
          <div className="text-lg font-bold text-white">Discord Sidebar</div>
          {/* Add sidebar items here */}
          <ul className="mt-4 space-y-2">
            <li className="text-white hover:bg-gray-600 p-2 rounded">Home</li>
            <li className="text-white hover:bg-gray-600 p-2 rounded">Messages</li>
            <li className="text-white hover:bg-gray-600 p-2 rounded">Friends</li>
            <li className="text-white hover:bg-gray-600 p-2 rounded">Settings</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold">Welcome to My App</h1>
          <p>This is a Discord-style web app with dark mode toggle.</p>
        </main>
      </div>
    </div>
  );
};

export default App;
