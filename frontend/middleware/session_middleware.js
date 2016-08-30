import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';

import { signin, signout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case SessionConstants.SIGNIN:
      console.log('in session_middleware signin');
      signin(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.SIGNOUT:
      console.log('in session_middleware signin');
      signout(() => next(action));
      break;
    default:
      return next(action);
  }
};
