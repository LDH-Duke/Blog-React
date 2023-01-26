import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [subject,subjectUpdate] = useState(['동래 맛집 추천','경성대부경대 맛집 추천','서면 맛집 추천']);
  let [goodCount, addCount] = useState([0,0,0]); 

  return (
    <div className="App">
      <div className="header-nav">
        <div className='nav-logo'>
          <span>Blog</span>
        </div>
        <button onClick={()=>{}}>정렬</button>
      </div>
      <div className='list'>
          <ul>
            <li>
              <h4>{subject[0]}<span onClick={()=>{goodCount = [...goodCount]; goodCount[0] += 1; addCount(goodCount)}}>👍</span>{goodCount[0]}</h4>
              <p>2월17일 발행</p>
              <button onClick={()=>{let copy=[...subject]; copy[0] = '전포 맛집 추천'; subjectUpdate(copy)}}>변경</button>
            </li>
            <li><h4>{subject[1]}<span onClick={()=>{goodCount = [...goodCount]; goodCount[1] += 1; addCount(goodCount)}}>👍</span>{goodCount[1]}</h4><p>2월18일 발행</p></li>
            <li><h4>{subject[2]}<span onClick={()=>{goodCount = [...goodCount]; goodCount[2] += 1; addCount(goodCount)}}>👍</span>{goodCount[2]}</h4><p>2월19일 발행</p></li>
          </ul>
        </div>
    </div>
  );
}

export default App;
