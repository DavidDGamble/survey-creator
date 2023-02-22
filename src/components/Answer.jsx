import React from "react";
import PropTypes from "prop-types"

function Answer(props) {
  return (
    <div className="answer">
      <p key={props.answer}>{props.answer}</p>
    </div>
  )
}

Answer.propTypes = {
  answer: PropTypes.string
}

export default Answer;