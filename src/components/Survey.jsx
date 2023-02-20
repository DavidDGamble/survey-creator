import React from "react";
import PropTypes from 'prop-types';

function Survey(props) {
  <div className="survey" onClick = {() => props.whenSurveyClicked(props.id)}>
    <p>{props.q1}</p>
    <p>{props.q2}</p>
    <p>{props.q3}</p>
    <p>{props.q4}</p>
    <p>{props.q5}</p>
    <hr />
  </div>
};

Survey.propTypes = {
  q1: PropTypes.string,
  q2: PropTypes.string,
  q3: PropTypes.string,
  q4: PropTypes.string,
  q5: PropTypes.string,
  whenSurveyClicked: PropTypes.func
};

export default Survey;