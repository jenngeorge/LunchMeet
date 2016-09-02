import { receiveCurrentUser,
         receiveErrors,
         SessionConstants,
         signoutAction
       } from '../actions/session_actions';

import { signin, signout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const signoutSuccess = () => dispatch(signoutAction());
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
      console.log('in session_middleware signout');
      signout(signoutSuccess);
      return next(action);
    default:
      return next(action);
  }
};
