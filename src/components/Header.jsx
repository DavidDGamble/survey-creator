import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Survey Creator</h1>
        <Link to="/">Home</Link><br/>
        <Link to="/sign-in">Sign In</Link>
    </div>
  )
}

export default Header;
