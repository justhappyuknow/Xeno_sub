import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const handleLogout = () => {
    // Implement logout logic
    console.log('Logout successful');
  };

  return (
    <div className="bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Mini CRM</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link
              to="/"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/create-audience"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Create Audience
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/campaigns"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Campaign List
            </Link>
          </li>
          <li className="mb-2">
            <button
              onClick={handleLogout}
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;