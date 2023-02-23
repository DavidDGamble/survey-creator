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


// > let test = [];
// undefined
// > const q1 = 'what is the meaning of life?'
// undefined
// > test.push([test.length + 1, q1])
// 1
// > const q2 = 'will this work?'
// undefined
// > test.push([test.length + 1, q2])
// 2
// > const q3 = 'are you thirsty?'
// undefined
// > test.push([test.length + 1, q3])
// 3
// > const entries = new Map([
// ...   ['foo', 'bar'],
// ...   ['baz', 42]
// ... ]);
// undefined
// > entries
// Map(2) { 'foo' => 'bar', 'baz' => 42 }
// > const questions = new Map(test)
// undefined
// > const obj = Object.fromEntries(questions)
// undefined
// > obj
// {
//   '1': 'what is the meaning of life?',
//   '2': 'will this work?',
//   '3': 'are you thirsty?'
// }