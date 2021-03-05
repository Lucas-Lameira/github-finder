import React, {useState} from 'react'

export default function Search () {
const [text, setText] = useState('');

  function inputValueChange (event) {
    setText(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(text)
  }

  return(
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="text" 
          placeholder="Search Users"
          onChange={inputValueChange}     
          value={text}  
        />
        <input type="submit" value="Search" className="btn btn-dark btn-block"/>
      </form>
    </div>
  )
}