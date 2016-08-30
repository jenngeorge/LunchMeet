import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = function(state = _nullUser, action){
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      console.log('in session_reducer receive current user ');
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});

    case SessionConstants.SIGNOUT:
      console.log('in session_reducer signout ');
      return merge({}, _nullUser);

    case SessionConstants.RECEIVE_ERRORS:
      console.log('in session_reducer receive errors');
      const errors = action.errors;
      return merge({}, _nullUser, {errors});
    default:
      return state;
  }
};



export default SessionReducer;
