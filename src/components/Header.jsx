import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { auth } from './../firebase.js';


function Header() {
  // const currUser = useRef(null);
  // useEffect(() => {
  //   if (auth.currentUser.email != null) {
  //     currUser.current = auth.currentUser.email
  //   } else {
  //     currUser.current = null
  //   }
  // }, []);

  return (
    <div className="header">
      <div className="links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/sign-in">Account</Link>
      </div>
      <h1 className="header-name">Survey Creator</h1>
      {/* <div className="curr-user">
        <h3></h3>
      </div> */}
    </div>
  )
}

export default Header;
