import React from "react";
import PropTypes from "prop-types";

function NewSurveyForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.newSurveyFormSubmission}>
        <input
        type='text'
        name='q1'
        placeholder="Question 1"
        />
        <input
        type='text'
        name='q2'
        placeholder="Question 2"
        />
        <input
        type='text'
        name='q3'
        placeholder="Question 3"
        />
        <input
        type='text'
        name='q4'
        placeholder="Question 4"
        />
        <input
        type='text'
        name='q5'
        placeholder="Question 5"
        />
        <button type="submit">Submit!</button>
      </form>
    </React.Fragment>
  )
}

NewSurveyForm.propTypes = {
  newSurveyFormSubmission: PropTypes.func,
  buttonText: PropTypes.string
}

export default NewSurveyForm