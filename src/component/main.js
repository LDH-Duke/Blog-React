import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


function Main() {
  const posts = useLocation().state.posts;
  const posts1 = useLocation().state;
  
  console.log(posts1)

  return (
    <div className='main'>
        <h1>Blog-Supporter</h1>
        <hr></hr>
        <div className='edit_button'>
            <a href='/editpost'><span className='edit_post'>글쓰기</span></a>
        </div>
        <div className='post'>
          <ul>{posts.map((post, idx)=>{
            return <li key={post.id}>
              <Link to={/post/+post.id} state={posts1}>
                {post.id}.{post.title}<br/>
              </Link><hr/></li>
          })}
          </ul>
        </div>
        

    </div>
  )
}

export default Main