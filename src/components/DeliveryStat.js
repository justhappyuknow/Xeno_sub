import React from 'react';

const DeliveryStats = ({ campaign }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-4 sm:mt-0 sm:ml-4">
      <h3 className="text-lg font-bold mb-2">Delivery Stats</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <p className="text-gray-600 text-sm sm:text-base">
            Audience Size:
          </p>
          <p className="font-bold text-lg">{campaign.audienceSize}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm sm:text-base">Sent:</p>
          <p className="font-bold text-lg">{campaign.sentCount}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm sm:text-base">Failed:</p>
          <p className="font-bold text-lg">{campaign.failedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStats;