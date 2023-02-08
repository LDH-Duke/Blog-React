import userEvent from '@testing-library/user-event';
import React, { useState, useRef, useLayoutEffect, useEffect   } from 'react';
import { Link } from 'react-router-dom';


function Editpost() {
  const p = JSON.parse(sessionStorage.getItem("posts"))
  const titleInput = useRef(); 
  const contentInput = useRef();

  if(p == null){
    var nextId = 1;
  } else{
    var nextId = p.length+1;
  }

  const [posts, setPosts] = useState(()=>JSON.parse(sessionStorage.getItem("posts"))||[]);

  useEffect(()=>{
    sessionStorage.setItem("posts", JSON.stringify(posts),[posts]);
  }, [posts])

  const onSave = () => {
    const post = {
      id : nextId,
      title : titleInput.current.value,
      content : contentInput.current.value 
    }

    setPosts(posts.concat(post));

    nextId += 1;
  };


  const onReset = () => {
    nextId = 1;
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
        <a href='/' className='submit_btn'  onClick={onSave} >작성완료</a>
        <a href='/editpost' className='submit_btn' onClick={onReset} >리셋</a>
        {/* <Link to="/" className='submit_btn' onClick={onSave}>등록하기</Link> */}
    </div>
  )
}

export default Editpost