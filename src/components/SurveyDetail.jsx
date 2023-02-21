import React from "react";
import PropTypes from "prop-types";

function SurveyDetail(props) {
  const { survey, onClickingEdit, onClickingDelete } = props;
  return (
    <div>
      <h2>Survey Details</h2>
      <h3><strong>Name: </strong>{survey.name}</h3>
      <p><strong>Question 1: </strong>{survey.q1}</p>
      <p><strong>Question 2: </strong>{survey.q2}</p>
      <p><strong>Question 3: </strong>{survey.q3}</p>
      <p><strong>Question 4: </strong>{survey.q4}</p>
      <p><strong>Question 5: </strong>{survey.q5}</p>
      <button onClick={onClickingEdit}>Edit</button>
      <button onClick={()=> onClickingDelete(survey.id)}>Delete</button>
    </div>
  )
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default SurveyDetail;