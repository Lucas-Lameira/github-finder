import React, {useContext, useState} from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext';

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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="text" 
          placeholder="Type to search for a github users..."
          onChange={inputValueChange}     
          value={text}  
        />
        <input type="submit" value="Search" className="btn btn-dark btn-block"/>
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

export default Search