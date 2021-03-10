import React from 'react';
import {Link} from 'react-router-dom'

export default function UserItem ({userInfo: {avatar_url, login}}) {  
  return (
    <div className="card text-center">
      <img 
        src={avatar_url}
        alt="github user profile image"
        className="round-img"
        style={{width: '60px'}}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/:${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  )
}