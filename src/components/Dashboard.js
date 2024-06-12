import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { userProfile } = location.state || {};

  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mini CRM</h1>
          <nav className="md:hidden">
            <button className="flex items-center px-3 py-2 rounded text-gray-500 hover:text-white hover:bg-gray-700">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </nav>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/audience"
                  className="hover:text-gray-300 transition-colors"
                >
                  Create Audience
                </Link>
              </li>
              <li>
                <Link
                  to="/campaigns"
                  className="hover:text-gray-300 transition-colors"
                >
                  Campaign List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        {userProfile ? (
          <div>
            <h3>Welcome, {userProfile.name}!</h3>
            <img
              src={userProfile.imageUrl}
              alt="User avatar"
              className="w-16 h-16 rounded-full"
            />
            <p>Email: {userProfile.email}</p>
          </div>
        ) : (
          <p>No user profile information available.</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="../assets/overview.jpg"
              alt="Overview"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold mb-2">CRM Overview</h3>
            <p className="text-gray-600">
              Get a quick overview of your customer relationships, recent
              activities, and campaign performance.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="../assets/recent.jpg"
              alt="Recent Campaigns"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Recent Campaigns</h3>
            <p className="text-gray-600">
              View details of your recently sent campaigns, including audience
              size, sent count, and delivery stats.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="../assets/activities.jpg"
              alt="Activities"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Activities</h3>
            <p className="text-gray-600">
              Stay up-to-date with the latest activities in your CRM, such as
              new customer signups, orders, and campaign interactions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
