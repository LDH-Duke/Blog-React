import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';


function Editpost() {
  const titleInput = useRef();
  const contentInput = useRef();
  const nextId = useRef(1);

  const [inputs, setInputs] = useState([{
    title : '',
    content : ''
  }]);

  const [posts, setPosts] = useState([]);

  const onSave = () => {
    const post = {
      id : nextId.current,
      title : titleInput.current.value,
      content : contentInput.current.value 
    }

    // sessionStorage
    // sessionStorage.setItem()

    setPosts(posts.concat(post));

    setInputs({
      title : '',
      content : ''
    })

    nextId.current += 1;
  };


  const onReset = () => {
    nextId.current = 1;
    setPosts([

    ])
  };

 
  console.log('Render')

  return (
    <div className='editpost'>
        <h1>게시물 작성</h1>
        <hr/>
        <div className='edit_form'>
            <input className='input_title' type='text' name='title'  placeholder='제목' ref={titleInput}/><br/>
            <textarea className='input_contents' name='content'  placeholder='내용' ref={contentInput}/>
        </div>
        <a href='#' className='submit_btn'  onClick={onSave} >작성완료</a>
        <a href='/editpost' className='submit_btn' onClick={onReset} >리셋</a>
        <Link to="/" className='submit_btn' onClick={onSave} state={{posts}}>등록하기</Link>
    </div>
  )
}

export default Editpost