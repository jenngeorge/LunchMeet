//user API util
import {
  signup,
  fetchUsers,
  fetchSingleUser,
  updateUser
} from '../util/user_api_util';

//user actions
import {
  UserConstants,
  signupAction,
  requestUsers,
  requestSingleUser,
  receiveUsers,
  receiveSingleUser
  } from '../actions/user_actions';

export default ({getState, dispatch}) => next => action => {
  const usersSuccess = data => dispatch(receiveUsers(data));
  const singleUserSuccess = data => dispatch(receiveSingleUser(data));
  const errorCallback = () => console.log('error from user signup middleware');
  const result = next(action);

  switch(action.type){
    case UserConstants.SIGNUP:
      signup(action.user, usersSuccess, errorCallback);
      break;

    case UserConstants.REQUEST_USERS:
      console.log('users_middleware request users ');
      fetchUsers(usersSuccess);
      break;

    case UserConstants.REQUEST_SINGLE_USER:
      console.log('users_middleware request single user ');
      fetchSingleUser(action.user, singleUserSuccess);
      break;

    default:
      break;
  }
  return result;
};
