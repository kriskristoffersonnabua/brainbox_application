import * as types from './types';
import {
  allTutors,
  getLoginUserInformation,
  getTutorSchedule,
  getTutorInformation,
  searchByNameAndSubject,
} from '../lib/api';

export const searchTutor = string => {
  return async dispatch => {
    const tutors = await searchByNameAndSubject(string);
    console.log('tutors', tutors);
    dispatch({
      type: types.SEARCHED_TUTORS,
      payload: tutors,
    });
  };
};

export const getTutor = tutorId => {
  return async dispatch => {
    const tutorInformation = await getTutorInformation(tutorId);
    dispatch({
      type: types.USER_INFO,
      payload: tutorInformation,
    });
  };
};

export const getUserInformation = () => {
  return async dispatch => {
    const userInformation = await getLoginUserInformation();
    if (userInformation) {
      dispatch({
        type: types.ME_INFO,
        payload: userInformation,
      });
    } else return;
  };
};

export const getTutorSched = () => {
  return async dispatch => {
    const tutorSchedule = await getTutorSchedule();
    dispatch({
      type: types.TUTOR_SCHEDULE,
      payload: tutorSchedule,
    });
  };
};

export const getAllTutors = () => {
  return async dispatch => {
    const tutors = await allTutors();
    dispatch({
      type: types.ALL_TUTORS,
      payload: tutors,
    });
  };
};
