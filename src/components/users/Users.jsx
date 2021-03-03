//Container for all users 
import React from 'react';
import UserItem from './UserItem'

export default function Users () {

  const estado = {
    users: [
      {
        id: '1',
        login: "login legal",
        avatar_url: "https://source.unsplash.com/random",
        html_url: "https://github.com/Lucas-Lameira" 
      },
      {
        id: '2',
        login: "login legal2",
        avatar_url: "https://source.unsplash.com/random",
        html_url: "https://github.com/Lucas-Lameira" 
      },
      {
        id: '3',
        login: "login legal3",
        avatar_url: "https://source.unsplash.com/random",
        html_url: "https://github.com/Lucas-Lameira" 
      },
      {
        id: '4',
        login: "login legal4",
        avatar_url: "https://source.unsplash.com/random",
        html_url: "https://github.com/Lucas-Lameira" 
      },
      {
        id: '5',
        login: "login legal5",
        avatar_url: "https://source.unsplash.com/random",
        html_url: "https://github.com/Lucas-Lameira" 
      }
    ]
  }
  return(
    <div style={UserStyle}>
      {
        estado.users.map(user => <UserItem userInfo={user} key={user.id}/>)        
      }
    </div>
  )
}

const UserStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'

}