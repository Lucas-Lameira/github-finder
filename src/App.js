import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import './App.css';

function App() {
  const [users, setUsers] = useState([]); //search a bunch of users
  const [isLoading, setIsLoading] = useState(false)//boolean to display a spinner git trough a component
  const [user, setUser] = useState({}); //search a single user
  const [repos, setRepos] = useState([]); //store repositories from a specific github user
  const [alert, setAlert] = useState(null);
/* 
  useEffect(async ()=>{
    // axios deal with promisses
    const response = await axios.get('https://api.github.com/users')
    
    setUsers(response.data);
    setIsLoading(false);
  }, []) leave it empty to run only 1 time per reload
 */


  //Search for users on github
  async function searchUsers (text) {
    setIsLoading(true);       
    const response = await axios.get(`https://api.github.com/search/users?q=${text}`)    
    setUsers(response.data.items);        
    setIsLoading(false);
  }

  //Clear all users from ui/state
  function clearUsers() {
    setUsers([]);
    setIsLoading(false);
  }

  //Alert if input is empty
  function handleAlert(message, classType) {
    setAlert({message, classType});
    setTimeout (() => {setAlert(null)}, 5000);
  }

  //get a single github user
  async function getUser (username) {    
    setIsLoading(true);    
    const response = await axios.get(`https://api.github.com/users/${username}`);
    setUser(response.data);
    setIsLoading(false);
  }

  //get a bunch of repos from user
  async function getUserRepos (username) {
    setIsLoading(true);
    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    setRepos(response.data);
    setIsLoading(false);
  }

  return (    
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Alert alert={alert}/>          
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>
                <Search 
                  searchUsers={searchUsers} 
                  clearUsers={clearUsers}
                  showClearButton={users.length > 0 ? true : false}
                  handleAlert={handleAlert}
                />
                <Users loading={isLoading} users={users}/>
              </Fragment>
            )}/>

            <Route exact path="/about" component={About}/>

            <Route exact path='/user/:login' render={props => (
              <User 
                {...props} 
                getUser={getUser} 
                getUserRepos={getUserRepos} 
                user={user} 
                repos={repos}
                loading={isLoading} 
              />
            )}/>
          </Switch>
        </div>        
      </div>    
    </BrowserRouter>
  );
}

export default App;
