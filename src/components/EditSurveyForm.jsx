import React from "react";
import PropTypes from 'prop-types';

function EditSurveyForm(props) {
  const { survey } = props;

  function handleEditSurveyFormSubmit(event) {
    event.preventDefault();
    

    props.onEditSurvey({
      name: event.target.name.value,
      q1: event.target.q1.value,
      q2: event.target.q2.value,
      q3: event.target.q3.value,
      q4: event.target.q4.value,
      q5: event.target.q5.value,
      id: survey.id
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleEditSurveyFormSubmit}>
        <input 
          type="text"
          name="name"
          defaultValue={props.survey.name}
        /><br/>
        <textarea
          type='text'
          name='q1'
          defaultValue={props.survey.q1}
        /><br/>
        <textarea
          type='text'
          name='q2'
          defaultValue={props.survey.q2}
        /><br/>
        <textarea
          type='text'
          name='q3'
          defaultValue={props.survey.q3}
        /><br/>
        <textarea
          type='text'
          name='q4'
          defaultValue={props.survey.q4}
        /><br/>
        <textarea
          type='text'
          name='q5'
          defaultValue={props.survey.q5}
        /><br/>
        <button type="submit">Submit!</button>
      </form>
    </React.Fragment>
  );
};

EditSurveyForm.propTypes = {
  onEditSurvey: PropTypes.func,
  survey: PropTypes.object
};

export default EditSurveyForm;