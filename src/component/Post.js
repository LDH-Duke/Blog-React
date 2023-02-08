import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Post() {
  const postid = useParams().postid;  

  const p = JSON.parse(sessionStorage.getItem("posts"));
  console.log(p[postid-1])


  return (
    <div className='post'>
      <div className='title'>
        <span>{p[postid-1].title}</span>
      </div>
      <hr/>
      <div className='content'>
        <span>{p[postid-1].content}</span>
      </div>
    </div>
  )
}

export default Post