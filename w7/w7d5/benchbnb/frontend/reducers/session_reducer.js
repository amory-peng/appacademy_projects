import { RECEIVE_CURRENT_USER, RECEIVE_ERROR } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = { currentUser: null, errors: [] };

const SessionReducer = (state= _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.user} );

    case RECEIVE_ERROR:
      return merge({}, state, {currentUser: null, errors: action.errors});

    default:
      return state;
  }
};

export default SessionReducer;
