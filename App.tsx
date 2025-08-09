
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/pages/Dashboard';
import Reports from './components/pages/Reports';
import Analytics from './components/pages/Analytics';
import Forms from './components/pages/Forms';
import Messaging from './components/pages/Messaging';
import Profile from './components/pages/Profile';
import Tracking from './components/pages/Tracking';
import { MOCK_LEADS } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex h-screen bg-gray-100 font-sans">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard leads={MOCK_LEADS} />} />
              <Route path="/reports" element={<Reports leads={MOCK_LEADS} />} />
              <Route path="/analytics" element={<Analytics leads={MOCK_LEADS} />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/text-messaging" element={<Messaging type="SMS" />} />
              <Route path="/emails" element={<Messaging type="Email" />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/tracking" element={<Tracking />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
