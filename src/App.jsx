import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './Components/Background/Background';
import LoginTable from './Components/LoginTable/LoginTable';
import './App.css';
import Story from './Components/Story/Story';
import Quest from './Components/Quest/Quest';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Background />
            <LoginTable />
          </>
        } />
        <Route path="/story" element={<Story />} />
        <Route path="/quest" element={<Quest />} />
      </Routes>
    </Router>
  );
};

export default App;
