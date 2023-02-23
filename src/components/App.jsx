import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import SurveyControl from './SurveyControl';
import SignIn from './SignIn';
import { auth } from './../firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

function App() {

  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const [currUser, setCurrUser] = useState(null)

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`);
        setSignOutSuccess(null);
        setCurrUser(auth.currentUser.email)
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
        setCurrUser(null);
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <Router>
    <div className="App">
      <Header 
      currUserDisplay={currUser}/>
      <Routes>
        <Route path="/sign-in" element={
            <SignIn 
              onSignIn={doSignIn}
              onSignOut={doSignOut}
              signInMessage={signInSuccess}
              signOutMessage={signOutSuccess}
              />} />
        <Route path="/" element={
            <SurveyControl />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
