import React from "react";
import PropTypes from 'prop-types';

function SurveyForm(props) {
  const { survey } = props;

  function handleSurveyFormSubmit(event) {
    event.preventDefault();
    props.onNewAnswersCreation({
      surveyId: survey.id,
      a1: event.target.a1.value,
      a2: event.target.a2.value,
      a3: event.target.a3.value,
      a4: event.target.a4.value,
      a5: event.target.a5.value,
    });
  };

  return (
    <div className="survey-form" onSubmit={handleSurveyFormSubmit}>
      <button onClick={props.onClickingSurvey} >Return to details</button>
      <h2>{survey.name}</h2><br/>
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
  onNewAnswersCreation: PropTypes.func,
  onClickingSurvey: PropTypes.func
};

export default SurveyForm;