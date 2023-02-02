import React, { useState } from 'react'



function Editpost() {
  const [post, setPost] = useState({
    title : "",
    content : ""
  });
  
  const {title, content} = post; //비구조화 할당

  const onChange = (e) => {
    const {value, name} = e.target;
    setPost({
      ...post,
      [name] : value
    });
  };

  const onReset =() => {
    setPost({
      title:'',
      content:''
    })
  }

  return (
    <div className='editpost'>
        <h1>게시물 작성</h1>
        <hr/>
        <div className='edit_form'>
            <input className='input_title' type='text' name='title' placeholder='제목'onChange={onChange} value={title}/><br/>
            <textarea className='input_contents' name='content' placeholder='내용' onChange={onChange} value={content}></textarea>
        </div>
        <button className='submit_btn' onClick={onReset}>작성완료</button>
        <p>제목 : {title}</p>
        <p>내용 : {content}</p>
    </div>
  )
}

export default Editpost