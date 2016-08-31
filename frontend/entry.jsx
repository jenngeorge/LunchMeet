
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//testing
//user actions
import {
  UserConstants,
  updateUserAction,
  signupAction,
  requestUsers,
  requestSingleUser,
  receiveUsers,
  receiveSingleUser
  } from './actions/user_actions';

import {
  SessionConstants,
  signin,
  signout,
  receiveCurrentUser
  } from './actions/session_actions';



//test session actions
window.signout = signout;
window.signin = signin;
window.requestUsers = requestUsers;
window.receiveCurrentUser = receiveCurrentUser;

//test user actions
window.signupAction = signupAction;
window.receiveUsers = receiveUsers;
window.requestUsers = requestUsers;
window.requestSingleUser = requestSingleUser;
window.receiveSingleUser = receiveSingleUser;
window.updateUserAction = updateUserAction;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = configureStore(initialState);
    window.store = store;
  } else {
    store = configureStore();
    window.store = store;
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
