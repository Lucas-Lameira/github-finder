import React, {useContext, useState} from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext';

import styles from '../../styles/components/Search.module.css';

function Search () {
  //github context
  const githubContext = useContext(GithubContext);
  const {searchUsers, clearUsers, users} = githubContext;

  //alert context
  const alertContext = useContext(AlertContext)
  const {handleAlert} = alertContext;

  const [text, setText] = useState('');

  //update the state on user input change
  function inputValueChange (event) {
    setText(event.target.value)
  }

  //when user clicks the button 
  function handleSubmit(e) {
    e.preventDefault();
    if(text === ''){
      handleAlert('Required input', 'light')
    }else{
      searchUsers(text); //setting prop up
      setText('');
    }
  }

  return(
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input 
          type="text" 
          name="text" 
          placeholder="Type to search for a github users..."
          onChange={inputValueChange}     
          value={text}           
        />
        <input type="submit" value="Search"/>
      </form>

      {users.length > 0 && (
        <button onClick={clearUsers} className={styles.clearButton}>
          Clear
        </button>
      )}
    </div>
  )
}

export default Search