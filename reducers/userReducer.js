import * as types from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGGED_IN_USER:
      return {
        ...state,
        authToken: action.payload,
        landingPage: 'UserDashboard'
      };
      break;
    case types.LOGGED_OUT_USER:
      return {
        ...state,
        landingPage: 'Login'
      };
      break;
    default:
      return state;
  }
}
