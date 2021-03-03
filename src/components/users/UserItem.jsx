import React from 'react';

export default function UserItem (props) {
  console.log(props)
  return (
    <div className="card text-center">
      <img 
        src={props.userInfo.avatar_url}
        alt="github user profile image"
        className="round-img"
        style={{width: '60px'}}
      />
      <h3>{props.userInfo.login}</h3>

      <div>
        <a href={props.userInfo.html_url}
          className="btn btn-dark btn-sm my-1"
          target="_blank"
        >
          More
        </a>
      </div>
    </div>
  )
}
