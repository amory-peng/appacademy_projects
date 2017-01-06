import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

//POJOS
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERROR,
  errors
});

//THUNKS
export const login = user => dispatch => {
  SessionAPIUtil.login(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)));
};

export const logout = dispatch => {
  SessionAPIUtil.logout().then(() => dispatch(receiveCurrentUser(null)));
};

export const signup = user => dispatch => {
  SessionAPIUtil.signup(user)
  .then((currentUser) => dispatch(receiveCurrentUser))
  .fail(err=>dispatch(receiveErrors(err.responseJSON)));
};

window.login = login;
