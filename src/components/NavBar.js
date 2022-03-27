import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className="links">
        <Link to="/">Home |</Link>
        <Link to="/sign_in">Sign in |</Link>
        <Link to="/sign_up">Sign up</Link>
      </div>
    </nav>
  );
}

export default NavBar;