import React from "react";
import PropTypes from "prop-types";
import { auth } from './../firebase.js';

function NewSurveyForm(props) {
  function handleNewSurveyFormSubmit(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      name: event.target.name.value,
      q1: event.target.q1.value,
      q2: event.target.q2.value,
      q3: event.target.q3.value,
      q4: event.target.q4.value,
      q5: event.target.q5.value,
      userId: auth.currentUser.uid
    });
  };

  return (
    <div className="newForm">
      <form onSubmit={handleNewSurveyFormSubmit}>
        <br/><input 
          type="text"
          name="name"
          placeholder="Survey Name"
          required
        /><br/><br/>
        <textarea
          type='text'
          name='q1'
          placeholder="Question 1"
          required
        /><br/><br/>
        <textarea
          type='text'
          name='q2'
          placeholder="Question 2"
          required
        /><br/><br/>
        <textarea
          type='text'
          name='q3'
          placeholder="Question 3"
          required
        /><br/><br/>
        <textarea
          type='text'
          name='q4'
          placeholder="Question 4"
          required
        /><br/><br/>
        <textarea
          type='text'
          name='q5'
          placeholder="Question 5"
          required
        /><br/>
        <button className="main-btn" type="submit">Submit!</button>
      </form>
      </div>
  )
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
}

export default NewSurveyForm