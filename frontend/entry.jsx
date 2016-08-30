
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

//testing
//user actions
import {
  UserConstants,
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


window.Store = configureStore();

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

document.addEventListener('DOMContentLoaded', () => {


  const root = document.getElementById('root');
});
