import React from 'react';
import logo from '../images/logo.jpg';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <img src={logo} alt="logo" height="60px" />
        Generator
      </div>
    );
  }
}

export default NavBar;
