import React, { useState, useEffect } from "react";
import SurveyList from './SurveyList';
import NewSurveyForm from './NewSurveyForm';
import SurveyDetail from './SurveyDetail'
import EditSurveyForm from './EditSurveyForm';
import SurveyForm from './SurveyForm';
import db from './../firebase.js';
import { collection, doc, addDoc, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';

function SurveyControl() {
  const [createFormVisible, setCreateFormVisible] = useState(false);
  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [editing, setEditing] = useState(false);
  const [takeSurvey, setTakeSurvey] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, 'surveys'),
      (collectionSnapshot) => {
        const surveys = [];
        collectionSnapshot.forEach((doc) => {
          surveys.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setMainSurveyList(surveys);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedSurvey != null) {
      setCreateFormVisible(false);
      setSelectedSurvey(null);
      setEditing(false);
    } else {
      setCreateFormVisible(!createFormVisible)
    }
  };

  const handleChangingSelectedSurvey = (id) => {
    const selection = mainSurveyList.filter(survey => survey.id === id)[0];
    setSelectedSurvey(selection);
  };

  const handleAddingNewSurveyToList = async (newSurvey) => {
    await addDoc(collection(db, 'surveys'), newSurvey);
    setCreateFormVisible(false);
  };

  const handleAddingAnswersToList = async (newAnswer) => {
    await addDoc(collection(db, 'answers'), newAnswer);
    setTakeSurvey(false);
  }

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditSurvey = async (editedSurvey) => {
    const surveyRef = doc(db, 'surveys', editedSurvey.id);
    await updateDoc(surveyRef, editedSurvey);
    setEditing(false);
    setSelectedSurvey(null);
  };

  const handleDeletingSurvey = async (id) => {
    await deleteDoc(doc(db, 'surveys', id));
    setSelectedSurvey(null);
  }; 

  const handleTakeSurveyClick = () => {
    setTakeSurvey(true);
  };

  

  let currVisibleState = null;
  let buttonText = null;

  if (error) {
    currVisibleState = <p>There was an error: {error}</p>
  } else if (editing) {
    currVisibleState = <EditSurveyForm 
      survey={selectedSurvey}
      onEditSurvey={handleEditSurvey} />
    buttonText = 'Return to survey list';
  } else if (takeSurvey) {
    currVisibleState = <SurveyForm 
      survey={selectedSurvey} 
      onNewAnswersCreation={handleAddingAnswersToList}/>
    buttonText = 'Return to survey list';
  } else if (createFormVisible) {
    currVisibleState = <NewSurveyForm
      onNewSurveyCreation={handleAddingNewSurveyToList} />
    buttonText = 'Return to survey list';
  } else if (selectedSurvey != null) {
    currVisibleState = <SurveyDetail 
      survey={selectedSurvey}
      onClickingDelete={handleDeletingSurvey}
      onClickingEdit={handleEditClick}
      onClickingSurvey={handleTakeSurveyClick} />
    buttonText="Return to survey list";
  } else {
    currVisibleState = <SurveyList 
      onSurveySelection={handleChangingSelectedSurvey} 
      surveyList={mainSurveyList} />
    buttonText = 'Add survey';
  };

  return (
    <React.Fragment>
      {currVisibleState}
      {error ? null : <button className="main-btn" onClick={handleClick}>{buttonText}</button>}
    </React.Fragment>
  );
};

export default SurveyControl;