import * as types from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_PAGE:
      return {
        ...state,
        landingPage: action.payload,
      };
      break;
    case types.SIGNUP_PAGE:
      return {
        ...state,
        landingPage: action.payload,
      };
      break;
    default:
      return state;
  }
}
