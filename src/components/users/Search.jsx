import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Search ({handleAlert, showClearButton, searchUsers, clearUsers}) {
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
      {showClearButton && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

Search.prototype = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired,
  handleAlert: PropTypes.func.isRequired
}
export default Search