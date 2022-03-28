import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className='nav-links'>
      <div className="links">
        <NavLink to="/">Home |</NavLink>
        <NavLink to="/sign_in">Sign in |</NavLink>
        <NavLink to="/sign_up">Sign up</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;