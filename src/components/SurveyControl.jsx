import React, { useState, useEffect } from "react";
import SurveyList from './SurveyList';
import NewSurveyForm from './NewSurveyForm';
import SurveyDetail from './SurveyDetail'
import EditSurveyForm from './EditSurveyForm';
import SurveyForm from './SurveyForm';
import AnswersList from './AnswersList'
import { db, auth } from './../firebase.js';
import { collection, doc, addDoc, onSnapshot, updateDoc, deleteDoc, query, getDocs, where } from 'firebase/firestore';

function SurveyControl() {
  const [createFormVisible, setCreateFormVisible] = useState(false);
  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [viewDetails, setViewDetails] = useState(false);
  const [editing, setEditing] = useState(false);
  const [takeSurvey, setTakeSurvey] = useState(false);
  const [error, setError] = useState(null);
  const [yourSurveys, setYourSurveys] = useState(false);
  const [viewAnswers, setViewAnswers] = useState(false);
  const [mainAnswersList, setMainAnswersList] = useState([])

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
    if (viewDetails || editing || takeSurvey || viewAnswers) {
      setCreateFormVisible(false);
      setViewDetails(false)
      setEditing(false);
      setTakeSurvey(false);
      setViewAnswers(false)
    } else {
      setCreateFormVisible(!createFormVisible)
    }
  };

  const handleChangingSelectedSurvey = (id) => {
    const selection = mainSurveyList.filter(survey => survey.id === id)[0];
    setSelectedSurvey(selection);
    setViewDetails(true)
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
    setEditing(!editing);
  };

  const handleEditSurvey = async (editedSurvey) => {
    const surveyRef = doc(db, 'surveys', editedSurvey.id);
    await updateDoc(surveyRef, editedSurvey);
    setEditing(false);
    setViewDetails(false);
  };

  const handleDeletingSurvey = async (id) => {
    await deleteDoc(doc(db, 'surveys', id));
    setSelectedSurvey(null);
    setViewDetails(false);
  };

  const handleTakeSurveyClick = () => {
    setTakeSurvey(!takeSurvey);
  };

  const handleYourSurveysClick = () => {
    setYourSurveys(!yourSurveys);
  }

  const handleAnswersClick = async () => {
    const q = query(collection(db, 'answers'),
      where('surveyId', '==', selectedSurvey.id))
    const qSnapshot = await getDocs(q)
    const answers = []
    qSnapshot.forEach((doc) => {
      answers.push({
        ...doc.data(),
        id: doc.id
      })
    });
    setMainAnswersList(answers)
    setViewAnswers(!viewAnswers);
    setViewDetails(!viewDetails)
  }

  if (auth.currentUser == null) {
    return (
      <div className="survey-control">
        <h1>You must be signed in to access surveys.</h1>
      </div>
    )
  } else if (auth.currentUser != null) {

    let currVisibleState = null;
    let buttonText = null;
    let currSurveyList = null;
    let yourBtnText = null;

    if (yourSurveys) {
      currSurveyList = mainSurveyList.filter(survey => survey.userId === auth.currentUser.uid);
      yourBtnText = 'View all surveys'
    } else {
      currSurveyList = mainSurveyList;
      yourBtnText = 'View your surveys'
    }

    if (error) {
      currVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
      currVisibleState = <EditSurveyForm
        survey={selectedSurvey}
        onEditSurvey={handleEditSurvey}
        onClickingEdit={handleEditClick} />
      buttonText = 'Return to survey list';
    } else if (takeSurvey) {
      currVisibleState = <SurveyForm
        survey={selectedSurvey}
        onNewAnswersCreation={handleAddingAnswersToList}
        onClickingSurvey={handleTakeSurveyClick} />
      buttonText = 'Return to survey list';
    } else if (createFormVisible) {
      currVisibleState = <NewSurveyForm
        onNewSurveyCreation={handleAddingNewSurveyToList} />
      buttonText = 'Return to survey list';
    } else if (viewDetails) {
      currVisibleState = <SurveyDetail
        survey={selectedSurvey}
        onClickingDelete={handleDeletingSurvey}
        onClickingEdit={handleEditClick}
        onClickingSurvey={handleTakeSurveyClick}
        onClickingAnswers={handleAnswersClick} />
      buttonText = "Return to survey list";
    } else if (viewAnswers) {
      currVisibleState = <AnswersList
        survey={selectedSurvey}
        answersList={mainAnswersList}
        onClickingAnswers={handleAnswersClick}
      />
      buttonText = "Return to survey list"
    } else {
      currVisibleState = <SurveyList
        onSurveySelection={handleChangingSelectedSurvey}
        surveyList={currSurveyList}
        onClickingYourSurveys={handleYourSurveysClick}
        btnText={yourBtnText} />
      buttonText = 'Add survey';
    };

    return (
      <div className="survey-control">
        {error ? null : <button className="main-btn" onClick={handleClick}>{buttonText}</button>}
        {currVisibleState}
      </div>
    );
  };
}

export default SurveyControl;

