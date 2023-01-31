import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header_Nav from './component/header_nav';

function App() {

  let [subject,subjectUpdate] = useState(['동래 맛집 추천','경성대부경대 맛집 추천','서면 맛집 추천']);
  let [goodCount, addCount] = useState([0,0,0]); 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header_Nav />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
