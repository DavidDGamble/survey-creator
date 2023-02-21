import React from "react";
import PropTypes from 'prop-types';

function SurveyForm(props) {
  const { survey } = props;

  // Write function to handleSubmit

  return (
    <div className="survey-form">
      <h2>{survey.name}</h2>
      <form>
        <label>{survey.q1}</label><br/>
        <input
          type='text'
          name='a1' 
        /><br/><br/>
        <label>{survey.q2}</label><br/>
        <input
          type='text'
          name='a2' 
        /><br/><br/>
        <label>{survey.q3}</label><br/>
        <input
          type='text'
          name='a3' 
        /><br/><br/>
        <label>{survey.q4}</label><br/>
        <input
          type='text'
          name='a4' 
        /><br/><br/>
        <label>{survey.q5}</label><br/>
        <input
          type='text'
          name='a5' 
        /><br/><br/>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

SurveyForm.propTypes = {
  survey: PropTypes.object,
  onNewAnswersCreation: PropTypes.func
};

export default SurveyForm;