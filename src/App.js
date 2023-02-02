import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import EditPost from './component/Editpost';



function App() {

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
