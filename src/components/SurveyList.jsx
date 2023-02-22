import React from "react";
import Survey from "./Survey";
import PropTypes from 'prop-types';


function SurveyList(props) {
  return (
    <div className="survey-list">
      <h5>Click on a survey to see it's details!</h5>
      {props.surveyList.map((survey) =>
        <Survey
          whenSurveyClicked={props.onSurveySelection}
          name={survey.name}
          q1={survey.q1}
          q2={survey.q2}
          q3={survey.q3}
          q4={survey.q4}
          q5={survey.q5}
          id={survey.id}
          key={survey.id} />
      )}
      <button className="main-btn" onClick={props.onClickingYourSurveys}>{props.btnText}</button>
    </div>
  );
};

SurveyList.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelection: PropTypes.func,
  btnText: PropTypes.string,
  onClickingYourSurveys: PropTypes.func
};

export default SurveyList;