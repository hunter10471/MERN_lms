import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topbar from './components/Topbar';

function App() {
  return (
    <Router>
      <div className='flex'>
        <Sidebar />
        <div className='w-full'>
          <Topbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
