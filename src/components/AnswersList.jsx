import React from "react";
import PropTypes from "prop-types";
import Answer from "./Answer";

function AnswersList(props) {
  const { survey } = props;
  return (
    <div className="answers-list">
      <h2>{survey.name}</h2><hr/>

      <div className="q1">
        <p><strong>{survey.q1}</strong></p>
        {props.answersList.map((answer) =>
          <Answer answer={answer.a1} />
        )}
      </div><hr/>
      <div className="q2">
        <p><strong>{survey.q2}</strong></p>
        {props.answersList.map((answer) =>
          <Answer answer={answer.a2} />
        )}
      </div><hr/>
      <div className="q3">
        <p><strong>{survey.q3}</strong></p>
        {props.answersList.map((answer) =>
          <Answer answer={answer.a3} />
        )}
      </div><hr/>
      <div className="q4">
        <p><strong>{survey.q4}</strong></p>
        {props.answersList.map((answer) =>
          <Answer answer={answer.a4} />
        )}
      </div><hr/>
      <div className="q5">
        <p><strong>{survey.q5}</strong></p>
        {props.answersList.map((answer) =>
          <Answer answer={answer.a5} />
        )}
      </div>
    </div>
  )

}

AnswersList.propTypes = {
  survey: PropTypes.object,
  answersList: PropTypes.array
}

export default AnswersList;