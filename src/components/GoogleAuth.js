import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleAuth = ({ setUserProfile }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (response) => {
    try {
      const profile = response?.profileObj; // Adjust based on actual response structure
      console.log('Login successful:', profile);
      if (profile) {
        setIsSignedIn(true);
        setUserProfile(profile);
        navigate('/'); // Redirect to dashboard
      } else {
        console.error('Profile information is missing in response.');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    console.log('Logout successful');
    setIsSignedIn(false);
    setUserProfile(null);
    navigate('/'); // Redirect to home after logout
  };

  return (
    <GoogleOAuthProvider clientId='48142782365-cmka5paftbcfucq76ltsq6ql1j5q6fg6.apps.googleusercontent.com'>
      <div className="flex justify-end p-4">
        {isSignedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <GoogleLogin
            onSuccess={handleLogin}
            onFailure={(error) => console.error('Login failed:', error)}
            useOneTap
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          />
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
