import React from 'react';
import logo from '../../images/logo.svg';

const Header = () => {  
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Reactive DataTables!</h1>
    </header>
  );
};

export default Header;
