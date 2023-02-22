import React, { useState } from "react";
import { auth } from './../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null); 
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}`);
        setSignInSuccess(null);
        setSignOutSuccess(null);
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}`);
      });
  };
  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`);
        setSignUpSuccess(null);
        setSignOutSuccess(null);
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
        setSignInSuccess(null);
        setSignUpSuccess(null);
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }



  let currVisibleState = null;

  if (auth.currentUser != null) {
    currVisibleState = 
    <div className="signOut">
    <h2>Sign Out</h2>
    {signOutSuccess}
    <button onClick={doSignOut}>Sign out</button>
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
    {signInSuccess}
    <form onSubmit={doSignIn}>
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

export default SignIn;