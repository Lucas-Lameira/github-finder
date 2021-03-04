import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(async ()=>{
    /* axios deal with promisses */
    const response = await axios.get('https://api.github.com/users')
    
    setUsers(response.data);
    setIsLoading(false);
  }, []) //leave it empty to run only 1 time per reload

  return (
    <div className="App">
      <Navbar/>

      <div className="container">
        <Users loading={isLoading} users={users}/>
      </div>
      
    </div>
  );
}

export default App;
