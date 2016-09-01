export const SessionConstants = {
  SIGNIN: "SIGNIN",
  SIGNOUT: "SIGNOUT",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const signin = user => ({
  type: SessionConstants.SIGNIN,
  user
});

export const signoutAction = () => ({
  type: SessionConstants.SIGNOUT
});

export const receiveCurrentUser = currentUser => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
