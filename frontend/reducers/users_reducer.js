import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = function(state = {}, action){
  switch(action.type){
    case UserConstants.RECEIVE_USERS:
      console.log('user reducer receive users');
      return action.users;
    case UserConstants.RECEIVE_SINGLE_USER:
      console.log('user reducer receive single user');
      return action.user;
    default:
      return state;
  }
};

export default UsersReducer;
