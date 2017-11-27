import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {  
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink to="/cats" activeClassName="active">Cats</NavLink>
    </nav>
  );
};

export default Header;
