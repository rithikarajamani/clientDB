import React from 'react';
import './navbar.css'
export default function NavBar(){
  return (
    <div>
        <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
        
          <img
              src="./assets/man.png" 
              alt="Man icon"
              className="man" 
            />
        </li>
        <li className="navbar-item">
          <span className="navbar-profile">Gowtham</span>
        </li>
      </ul>
    </nav>
    </div>
    
  );

}