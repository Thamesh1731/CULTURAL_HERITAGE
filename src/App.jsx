import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Festivals from './pages/Festivals';
import Timeline from './pages/Timeline';
import Phrases from './pages/Phrases';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/phrases" element={<Phrases />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
