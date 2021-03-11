/*
 Initial state 
 All actions should go in this file.

 ex: 
  Fetch data 
*/

import React, {useReducer} from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { 
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,  
 } from '../types';

//create initial state/ githubstate includes all the actions
const GithubState = props => {
  //initial global state relative to github
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  //search user
  async function searchUsers (text) {
    setIsLoading();
    const response = await axios.get(`https://api.github.com/search/users?q=${text}`);
    
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items //data u wanna send
    });
  }

   //get a single github user
   async function getUser (username) {    
    setIsLoading();    
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    dispatch({
      type: GET_USER,
      payload: response.data // single user tha comes from the endpoint: https://api.github.com/users/${username}
    })    
  }
  
  //get a bunch of repos from user
  async function getUserRepos (username) {
    setIsLoading();
    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    
    dispatch({
      type: GET_REPOS,
      payload: response.data
    });
  }

  //Clear all users from ui/state
  function clearUsers() {
    dispatch({type: CLEAR_USERS});
  }

  //set loading
  //const setIsLoading = () => dispatch({type: SET_LOADING})
  function setIsLoading() {
    dispatch({type: SET_LOADING});
  }

  //wrap the entire app with this provider
  return <GithubContext.Provider value={{
    //pass anithing available to the entire app
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading,
    searchUsers,
    clearUsers,
    getUser,
    getUserRepos
  }}>
    {props.children}
  </GithubContext.Provider>
}  

export default GithubState