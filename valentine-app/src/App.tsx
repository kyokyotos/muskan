import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ValentinePage from './components/ValentinePage';
import YesPage from './components/YesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValentinePage />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </Router>
  );
};

export default App;