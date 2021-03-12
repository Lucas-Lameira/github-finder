//Container for all users 
import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem'
import GithubContext from '../../context/github/githubContext'
import styles from '../../styles/components/Users.module.css';


function Users () {
  const githubContext = useContext(GithubContext); //remember to check the values in the provider, loading and users are comming from there
  const {loading, users} = githubContext;

  if(loading) {
    return (<Spinner/>) 
  }else{
    return(
      <div className={styles.usersContainer}>
        {
          users.map(user => <UserItem userInfo={user} key={user.id}/>)        
        }
      </div>
    )    
  }
}

/* //testing ways to style things
const UserStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}
 */
export default Users