
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

//question actions

import {
  QuestionConstants,
  makeResponse,
  requestQuestions,
  receiveQuestions,
  requestSingleQuestion,
  receiveSingleQuestion
} from './actions/question_actions';

//conversation actions
import {
  ConversationConstants,
  requestConversations,
  requestSingleConversation,
  receiveConversations,
  receiveSingleConversation,
  makeConversation,
  sendMessage
} from './actions/conversation_actions';


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

//test question actions
window.makeResponse = makeResponse;
window.receiveQuestions = receiveQuestions;
window.requestQuestions = requestQuestions;
window.receiveSingleQuestion = receiveSingleQuestion;
window.requestSingleQuestion = requestSingleQuestion;

// test
window.requestConversations = requestConversations;
window.requestSingleConversation = requestSingleConversation;
window.receiveConversations = receiveConversations;
window.receiveSingleConversation = receiveSingleConversation;
window.makeConversation = makeConversation;
window.sendMessage = sendMessage;


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
