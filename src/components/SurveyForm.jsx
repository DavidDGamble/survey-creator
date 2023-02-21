import React from "react";
import PropTypes from 'prop-types';

function SurveyForm(props) {
  const { survey } = props;

  function handleSurveyFormSubmit(event) {
    event.preventDefault();
    props.onNewAnswersCreation({
      // name: survey.name,
      surveyId: survey.id,
      // q1: survey.q1,
      a1: event.target.a1.value,
      // q2: survey.q2,
      a2: event.target.a2.value,
      // q3: survey.q3,
      a3: event.target.a3.value,
      // q4: survey.q4,
      a4: event.target.a4.value,
      // q5: survey.q5,
      a5: event.target.a5.value,
    });
  };

  return (
    <div className="survey-form" onSubmit={handleSurveyFormSubmit}>
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