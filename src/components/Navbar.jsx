import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container">
        <Link to="/"><h1>South Indian Heritage</h1></Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <div className="hamburger"></div>
        </button>
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/festivals" onClick={() => setIsOpen(false)}>Festivals</Link></li>
          <li><Link to="/timeline" onClick={() => setIsOpen(false)}>Timeline</Link></li>
          <li><Link to="/phrases" onClick={() => setIsOpen(false)}>Phrases</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
