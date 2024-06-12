import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateAudience from './components/CreateAudience';
import CampaignList from './components/CampaignList';
import SendCampaign from './components/SendCampaign';
import Sidebar from './components/Sidebar';
import GoogleAuth from './components/GoogleAuth';

const App = () => {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <GoogleAuth setUserProfile={setUserProfile} />
          <Routes>
            <Route path="/create-audience" element={<CreateAudience />} />
            <Route path="/campaigns" element={<CampaignList />} />
            <Route path="/send-campaign" element={<SendCampaign />} />
            <Route path="/" element={<Dashboard userProfile={userProfile} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
