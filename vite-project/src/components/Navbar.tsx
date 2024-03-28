// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-link">
        All
      </Link>
      <Link to="/?todos=active" className="navbar-link">
        Active
      </Link>
      <Link to="/?todos=completed" className="navbar-link">
        Completed
      </Link>
    </div>
  );
}

export default Navbar;
