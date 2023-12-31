import React from 'react';
import '../style/nav.css';
import { NavLink } from 'react-router-dom';
import userImg from '../assets/planet.png';

function Nav() {
  return (
    <header className="nav-head">
      <div className="false-nav">
        <div className="nav">
          <div className="logo">
            <img src={userImg} alt="logo" />
            <h2>Space Travelers&#39; Hub</h2>
          </div>
          <ul className="nav-items">
            <li className="nav-link"><NavLink to="/">Rockets</NavLink></li>
            <li className="nav-link"><NavLink to="/missions">Missions</NavLink></li>
            <span>|</span>
            <li className="nav-link"><NavLink to="/profile">My Profile</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
