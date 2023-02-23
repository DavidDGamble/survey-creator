import React, { useState } from "react";
import { auth } from './../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from "prop-types"

function SignIn(props) {
  const [signUpSuccess, setSignUpSuccess] = useState(null); 

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}`);

      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}`);
      });
  };

  let currVisibleState = null;

  if (auth.currentUser != null) {
    currVisibleState = 
    <div className="signOut">
    <h2>Sign Out</h2>
    {props.signOutMessage}
    <button onClick={props.onSignOut}>Sign out</button>
    </div>
  } else {
    currVisibleState = 
    <div className="signIn">
    <h2>Sign Up</h2>
    {signUpSuccess}
    <form onSubmit={doSignUp}>
      <input
        type='text'
        name='email'
        placeholder='Email' /><br/><br/>
      <input
        type='password'
        name='password'
        placeholder='Password' /><br/><br/>
      <button type='submit'>Sign up</button>
    </form><br/><br/>

    <h2>Sign In</h2>
    {props.signInMessage}
    <form onSubmit={props.onSignIn}>
      <input
        type='text'
        name='signinEmail'
        placeholder='Email' /><br/><br/>
      <input
        type='password'
        name='signinPassword'
        placeholder='Password' /><br/><br/>
      <button type='submit'>Sign in</button>
    </form><br/><br/>
    </div>
  }

  return (
    <div className="sign-in">
      {currVisibleState}
    </div>
  );
};

SignIn.propTypes = {
  onSignOut: PropTypes.func,
  onSignIn: PropTypes.func,
  signInMessage: PropTypes.string,
  signOutMessage: PropTypes.string,
}

export default SignIn;