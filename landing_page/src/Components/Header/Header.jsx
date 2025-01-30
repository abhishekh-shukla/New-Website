import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#courses">Courses</a>
      </nav>
    <div className="container">
      <div className="logo">@wénac</div>
    </div>
    <div className="buttons">
        <label>Login</label>
        <button className='signup_button'>Sign up</button>
        </div>
  </header>
);

export default Header;