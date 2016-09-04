//user API util
import {
  signup,
  fetchUsers,
  fetchSingleUser,
  updateUser
} from '../util/user_api_util';

//session actions
import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';

//user actions
import {
  UserConstants,
  signupAction,
  requestUsers,
  requestSingleUser,
  receiveUsers,
  receiveSingleUser
  } from '../actions/user_actions';

  //filter constants
  import { FilterConstants } from '../actions/filter_actions';


export default ({getState, dispatch}) => next => action => {
  const usersSuccess = data => dispatch(receiveUsers(data));
  const singleUserSuccess = user => dispatch(receiveSingleUser(user));
  const signupSuccess = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  const result = next(action);

  switch(action.type){
    case UserConstants.SIGNUP:
      signup(action.user, signupSuccess, errorCallback);
      break;

    case UserConstants.UPDATE_USER:
      console.log('in update user middleware');
      updateUser(action.user, signupSuccess, errorCallback);
      break;

    case UserConstants.REQUEST_USERS:
      const filters = getState().filters;
      console.log('users_middleware request users ');
      fetchUsers(filters, usersSuccess);
      break;

    case UserConstants.REQUEST_SINGLE_USER:
      console.log('users_middleware request single user ');
      fetchSingleUser(action.id, singleUserSuccess);
      break;

    default:
      break;
  }
  return result;
};
