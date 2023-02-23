import React from "react";
import Survey from "./Survey";
import PropTypes from 'prop-types';


function SurveyList(props) {
  return (
    <div className="survey-list">
      <button className="main-btn" onClick={props.onClickingYourSurveys}>{props.btnText}</button>
      <h4>Click on a survey to see it's details!</h4>
      {props.surveyList.map((survey) =>
        <Survey
          whenSurveyClicked={props.onSurveySelection}
          name={survey.name}
          id={survey.id}
          key={survey.id} />
      )}
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