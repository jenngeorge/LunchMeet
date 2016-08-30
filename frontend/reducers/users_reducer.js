import {UserConstants} from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = function(state = {}, action){
  switch(action.type){
    case UserConstants.RECEIVE_USERS:
      return action.users;
    case UserConstants.RECEIVE_SINGLE_USER:
      const thisUser = {[action.user.id]: action.user};
      return merge({}, state, thisUser);
    default:
      return state;
  }
};
