import React from "react";
import PropTypes from "prop-types";
import { auth } from './../firebase';
import audio from '../../src/surveySound.mp3';

function SurveyDetail(props) {

  function clickSurvey() {
    onClickingSurvey();
    playAudio();
  }

  const playAudio = () => {
    new Audio(audio).play()
  }

  const { survey, onClickingEdit, onClickingDelete, onClickingSurvey, onClickingAnswers } = props;
  let edit = null;
  let remove = null;

  if (auth.currentUser.uid === survey.userId) {
    edit = <button className="edit-btn" onClick={onClickingEdit}>Edit</button>
    remove = <button className="delete-btn" onClick={()=> onClickingDelete(survey.id)}>Delete</button>
  }

  return (
    <div>
      <h2>Survey Details</h2>
      <h3>{survey.name}</h3>
      <p>{survey.q1}</p>
      <p>{survey.q2}</p>
      <p>{survey.q3}</p>
      <p>{survey.q4}</p>
      <p>{survey.q5}</p>
      <button onClick={() => clickSurvey()} >Take Survey!</button>
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