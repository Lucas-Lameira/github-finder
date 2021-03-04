//Container for all users 
import React from 'react';
import Spinner from '../layout/spinner';
import UserItem from './UserItem'

export default function Users ({loading, users}) {
  if(loading) {
    return (      
      <Spinner/>
    ) 
  }else{
    return(
      <div style={UserStyle}>
        {
          users.map(user => <UserItem userInfo={user} key={user.id}/>)        
        }
      </div>
    )    
  }
}

const UserStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}