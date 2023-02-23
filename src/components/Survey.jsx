import React from "react";
import PropTypes from 'prop-types';

function Survey(props) {
  return (
    <div className="survey" onClick = {() => props.whenSurveyClicked(props.id)}>
      <h3>{props.name}</h3>
    </div>
  );
};

Survey.propTypes = {
  name: PropTypes.string,
  q1: PropTypes.string,
  q2: PropTypes.string,
  q3: PropTypes.string,
  q4: PropTypes.string,
  q5: PropTypes.string,
  id: PropTypes.string,
  whenSurveyClicked: PropTypes.func
};

export default Survey;