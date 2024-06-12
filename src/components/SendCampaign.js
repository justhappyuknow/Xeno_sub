import React, { useState } from 'react';

const SendCampaign = () => {
  const [audience, setAudience] = useState(null);
  const [message, setMessage] = useState('');
  const [schedule, setSchedule] = useState(null);

  const handleAudienceSelect = (selectedAudience) => {
    setAudience(selectedAudience);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleScheduleChange = (selectedSchedule) => {
    setSchedule(selectedSchedule);
  };

  const handleSendCampaign = () => {
    // Implement logic to send the campaign
    console.log('Sending campaign:', { audience, message, schedule });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Send Campaign</h1>
      <div className="mb-4">
        <label htmlFor="audience" className="block font-bold mb-2">
          Select Audience:
        </label>
        <select
          id="audience"
          value={audience ? audience.id : ''}
          onChange={(e) => handleAudienceSelect(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded w-full"
        >
          <option value="">Select an audience</option>
          {/* Add options for saved audiences */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-bold mb-2">
          Campaign Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          className="border border-gray-400 px-2 py-1 rounded w-full"
          rows="4"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="schedule" className="block font-bold mb-2">
          Schedule Campaign:
        </label>
        <input
          id="schedule"
          type="datetime-local"
          value={schedule || ''}
          onChange={(e) => handleScheduleChange(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded w-full"
        />
      </div>
      <div className="flex justify-end md:justify-center">
        <button
          onClick={handleSendCampaign}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
        >
          Send Campaign
        </button>
      </div>
    </div>
  );
};

export default SendCampaign;