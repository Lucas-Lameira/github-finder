import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import {SET_ALERT, REMOVE_ALERT} from '../types';

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState)
  
  //Alert if input is empty
  function handleAlert(message, classType) {
    //dispatch an object to the reducer
    dispatch({
      type: SET_ALERT,
      payload: {message, classType}
    })
    
    setTimeout (() => {dispatch({
      type: REMOVE_ALERT      
    })}, 3000);
  }

  return <AlertContext.Provider
    value={{
      alert: state,
      AlertState,
      handleAlert
    }}
  >
    {props.children}
  </AlertContext.Provider>
}

export default AlertState