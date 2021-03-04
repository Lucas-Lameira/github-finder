import React from 'react';

export default function UserItem ({userInfo: {avatar_url, login, html_url}}) {  
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
        <a href={html_url}
          className="btn btn-dark btn-sm my-1"
          target="_blank"
        >
          More
        </a>
      </div>
    </div>
  )
}