import React from 'react'
import List from './list';


function Main() {
  
  console.log(sessionStorage.getItem("posts"));
  return (
    <div className='main'>
        <h1>Blog-Supporter</h1>
        <hr></hr>
        <div className='edit_button'>
            <a href='/editpost'><span className='edit_post'>글쓰기</span></a>
        </div>
          <List />
    </div>
  )
}

export default Main