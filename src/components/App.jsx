import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import SurveyControl from './SurveyControl';
import SignIn from './SignIn';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<SurveyControl />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
