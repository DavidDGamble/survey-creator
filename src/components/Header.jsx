import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <div className="header">
      <div className="header-name">
      <h1>Survey Creator</h1>
      </div>
      <div className="links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/sign-in">Sign In</Link>
      </div>
      <div className="curr-user">
        <h3>{props.user}</h3>
      </div>
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.string
}

export default Header;
