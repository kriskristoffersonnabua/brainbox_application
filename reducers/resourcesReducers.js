import * as types from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ALL_TUTORS:
      return {
        ...state,
        tutors: action.payload,
      };
      break;
    case types.ME_INFO:
      return {
        ...state,
        user: action.payload
      }
    case types.TUTOR_SCHEDULE:
      return {
        ...state,
        schedule: action.payload
      }
    case types.USER_INFO:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}
