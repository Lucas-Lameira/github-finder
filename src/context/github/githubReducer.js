//function decides what happens to state based on a action
import { 
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING, 
} from '../types';

export default (state, action) => {
  //switch based on types
  switch(action.type) {
    case SEARCH_USERS: 
      return{
        ...state,
        users: action.payload, //this is an array
        loading: false
      };
    case CLEAR_USERS:
      return{
        ...state,
        users: [],
        loading: false
      };
    case GET_USER: 
      return{
        ...state,
        user: action.payload, // this is an object
        loading: false
      }
    case GET_REPOS:
      return{
        ...state,
        repos: action.payload, //fill the repos array with the payload
        loading: false
      };
    case SET_LOADING: 
      return {
        ...state, //state is imutable so spread it
        loading: true
      };
    default:
      return state;
  }
}