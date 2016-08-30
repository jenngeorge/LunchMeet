export const UserConstants = {
  SIGNUP: "SIGNUP",
  UPDATE_USER: "UPDATE_USER",
  RECEIVE_USERS: "RECEIVE_USERS",
  REQUEST_USERS: "REQUEST_USERS",
  RECEIVE_SINGLE_USER: "RECEIVE_SINGLE_USER",
  REQUEST_SINGLE_USER: "REQUEST_SINGLE_USER"
};

export const signupAction = user => ({
  type: UserConstants.SIGNUP,
  user
});

export const updateUserAction = user => ({
  type: UserConstants.UPDATE_USER,
  user
});

export const requestUsers = () => ({
  type: UserConstants.REQUEST_USERS
});

export const receiveUsers = users => ({
  type: UserConstants.RECEIVE_USERS,
  users
});

export const requestSingleUser = user => ({
  type: UserConstants.REQUEST_SINGLE_USER,
  user
});

export const receiveSingleUser = user => ({
  type: UserConstants.RECEIVE_SINGLE_USER,
  user
});
