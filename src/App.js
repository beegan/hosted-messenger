import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import IntercomMessenger from './components/IntercomMessenger';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Dashboard />} />
              <Route path="/customers" element={<Dashboard />} />
              <Route path="/settings" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
        <IntercomMessenger />
      </div>
    </Router>
  );
}

export default App;
