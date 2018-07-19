import * as types from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LANDING_PAGE:
      return {
        ...state,
        landingPage: action.payload,
      };
    default:
      return state;
  }
}
