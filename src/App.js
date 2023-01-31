import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/main';
import EditPost from './component/editpost';



function App() {

  let [subject,subjectUpdate] = useState(['동래 맛집 추천','경성대부경대 맛집 추천','서면 맛집 추천']);
  let [goodCount, addCount] = useState([0,0,0]); 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/editpost" element={<EditPost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
