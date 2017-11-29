/*
 * A functional component - stateless component
 */
import React from 'react';
import logo from '../../assets/images/logo.svg';

const Header = ({text}) => {  
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to {text}!</h1>
        </header>
    );
};

export default Header;
