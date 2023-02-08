import React from 'react'
import { Link } from 'react-router-dom';

function list() {
    const p = JSON.parse(sessionStorage.getItem("posts"));

    if(p == null){
        return (
            <div className='post'>
                등록된 게시물이 없습니다.
            </div>
          )
    }else{
        return (
            <div className='post'>
                <ul>
                    {p.map((post, idx)=>{
                    return <li key={post.id}>
                    <Link to={/post/+post.id}>
                        {post.id}.{post.title}<br/>
                    </Link><hr/></li>
                })}
                </ul>
            </div>
          )
    }
  
}

export default list