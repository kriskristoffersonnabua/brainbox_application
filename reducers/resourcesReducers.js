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
        user: action.payload,
      };
      break;
    case types.TUTOR_SCHEDULE:
      return {
        ...state,
        schedule: action.payload,
      };
      break;
    case types.TUTOR_INFO:
      return {
        ...state,
        tutor: action.payload,
      };
      break;
    case types.USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
      break;
    case types.SEARCHED_TUTORS:
      return {
        ...state,
        searchedTutors: action.payload,
      };
      break;
    case types.BOOKED_TUTORIALS:
      return {
        ...state,
        appointments: action.payload,
      };
    case types.PROGRAM_SELECTED:
      return {
        ...state,
        program: action.payload,
      };
      break;
    case types.AVAILABLE_PROGRAMS:
      return {
        ...state,
        availablePrograms: action.payload,
      };
      break;
    default:
      return state;
  }
}
