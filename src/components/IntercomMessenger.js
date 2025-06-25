import React, { useState, useEffect, useCallback } from 'react';

const IntercomMessenger = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Function to boot Intercom with user data or as anonymous
  const bootIntercom = useCallback((loggedIn) => {
    if (window.Intercom) {
      if (loggedIn) {
        window.Intercom('boot', {
          app_id: 'hwusrbgs',
          name: 'Demo User',
          email: 'demo@example.com',
          created_at: Math.round(Date.now() / 1000)
        });
      } else {
        window.Intercom('boot', {
          app_id: 'xy784yig'
          // No user data for anonymous visitors
        });
      }
    }
  }, []);

  // Load Intercom script
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://widget.intercom.io/widget/xy784yig';
    script.onload = () => {
      setScriptLoaded(true);
      bootIntercom(isLoggedIn);
    };
    document.body.appendChild(script);
    
    return () => {
      // Cleanup
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
      document.body.removeChild(script);
    };
  }, [isLoggedIn, bootIntercom]);

  // Update Intercom when login state changes
  useEffect(() => {
    if (scriptLoaded) {
      if (window.Intercom) {
        window.Intercom('shutdown');
        bootIntercom(isLoggedIn);
      }
    }
  }, [isLoggedIn, scriptLoaded]);

  const toggleLoginStatus = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <div className="intercom-toggle-container">
      <button 
        className="intercom-toggle-button"
        onClick={toggleLoginStatus}
      >
        {isLoggedIn ? 'Switch to Anonymous' : 'Switch to Logged In'}
      </button>
      <div className="intercom-status">
        Current: <span className={isLoggedIn ? 'logged-in' : 'anonymous'}>
          {isLoggedIn ? 'Logged in as Demo User' : 'Anonymous Visitor'}
        </span>
      </div>
    </div>
  );
};

export default IntercomMessenger;
