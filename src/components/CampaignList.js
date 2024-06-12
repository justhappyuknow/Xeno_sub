import React, { useState, useEffect } from 'react';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns from the backend API
    const fetchedCampaigns = [
      {
        id: 1,
        name: 'Summer Sale Campaign',
        sentDate: '2023-06-01',
        audienceSize: 5000,
        sentCount: 4500,
        failedCount: 500,
      },
      {
        id: 2,
        name: 'New Product Launch',
        sentDate: '2023-05-15',
        audienceSize: 10000,
        sentCount: 9000,
        failedCount: 1000,
      },
      // Add more campaigns as needed
    ];
    setCampaigns(fetchedCampaigns);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Campaign List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold mb-2">{campaign.name}</h3>
              <p className="text-gray-600">
                Sent on: {campaign.sentDate}
              </p>
              <p className="text-gray-600">
                Audience Size: {campaign.audienceSize}
              </p>
              <p className="text-gray-600">
                Sent: {campaign.sentCount}
              </p>
              <p className="text-gray-600">
                Failed: {campaign.failedCount}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignList;