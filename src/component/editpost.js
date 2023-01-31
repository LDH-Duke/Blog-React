import React from 'react'

function editpost() {
  return (
    <div className='editpost'>
        <h1>게시물 작성</h1>
        <hr/>
        <div className='edit_form'>
            <input className='input_title' type='text' placeholder='제목'/><br/>
            <textarea className='input_contents'></textarea>
        </div>
        <button className='submit_btn'>작성완료</button>
    </div>
  )
}

export default editpost