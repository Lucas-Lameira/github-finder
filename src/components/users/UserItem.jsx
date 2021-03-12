import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../styles/components/UserItem.module.css';

export default function UserItem ({userInfo: {avatar_url, login}}) {  
  return (
    <div className={styles.userItemContainer}>
      <img 
        src={avatar_url}
        alt="github user profile image"                
      />
      <h3>{login}</h3>
      
      <Link to={`/user/:${login}`}>
        More
      </Link>      
    </div>
  )
}