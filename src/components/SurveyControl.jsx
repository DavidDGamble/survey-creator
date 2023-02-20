import React, { useState, useEffect } from "react";
import SurveyList from './SurveyList';
import NewSurveyForm from './NewSurveyForm';

function SurveyControl() {
  const [createFormVisible, setCreateFormVisible] = useState(false);
  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedSurvey != null) {
      setCreateFormVisible(false);
      selectedSurvey(null);
      setEditing(false);
    } else {
      setCreateFormVisible(!createFormVisible)
    }
  }

  const handleChangingSelectedSurvey = (id) => {
    const selection = mainSurveyList.filter(survey => survey.id === id)[0];
    setSelectedSurvey(selection);
  }

  let currVisibleState = null;
  let buttonText = null;
  if (createFormVisible) {
    currVisibleState = <NewSurveyForm />
    buttonText = 'Return to survey list';
  } else {
    currVisibleState = <SurveyList onSurveySelection={handleChangingSelectedSurvey} surveyList={mainSurveyList} />
    buttonText = 'Add survey';
  };

  return (
    <React.Fragment>
      {currVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
};

export default SurveyControl;