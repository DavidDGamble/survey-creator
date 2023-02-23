import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";



function Header(props) {
  let welcomeMsg = null;
  if (props.currUserDisplay != null) {
    welcomeMsg = `Welcome back, ${props.currUserDisplay}!`
  } else {
    welcomeMsg = "Welcome!";
  }

  return (
    <div className="header">
      <div id="links" className="col-4">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/sign-in">Account</Link>
      </div> 
      <div id="header-name" className="col-4">
        <h1>Survey Creator</h1>
      </div>
      <div id="curr-user" className="col-4">
        <h3 className="messageEmail">{welcomeMsg}</h3>
      </div>
    </div>
  )
}

Header.propTypes = {
  currUserDisplay: PropTypes.string,
}

export default Header;
