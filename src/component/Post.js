import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Post() {

  const posts = useLocation().state.posts;

  const postid = useParams().postid;

  
console.log(posts[postid-1])
  


  return (
    <div className='post'>
      <div className='title'>
        <span>{posts[postid-1].title}</span>
      </div>
      <hr/>
      <div className='content'>
        <span>{posts[postid-1].content}</span>
      </div>
    </div>
  )
}

export default Post