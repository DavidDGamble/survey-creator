import React from "react";
import PropTypes from "prop-types";
import { auth } from './../firebase';

function SurveyDetail(props) {
  const { survey, onClickingEdit, onClickingDelete, onClickingSurvey, onClickingAnswers } = props;
  let edit = null;
  let remove = null;

  if (auth.currentUser.uid === survey.userId) {
    edit = <button onClick={onClickingEdit}>Edit</button>
    remove = <button onClick={()=> onClickingDelete(survey.id)}>Delete</button>
  }

  return (
    <div>
      <h2>Survey Details</h2>
      <h3>{survey.name}</h3>
      <p><strong>Question 1: </strong>{survey.q1}</p>
      <p><strong>Question 2: </strong>{survey.q2}</p>
      <p><strong>Question 3: </strong>{survey.q3}</p>
      <p><strong>Question 4: </strong>{survey.q4}</p>
      <p><strong>Question 5: </strong>{survey.q5}</p>
      <button onClick={onClickingSurvey}>Take Survey!</button>
      <button onClick={onClickingAnswers}>View Answers!</button>
      {edit}
      {remove}
    </div>
  )
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingSurvey: PropTypes.func,
  onClickingAnswers: PropTypes.func
}

export default SurveyDetail;