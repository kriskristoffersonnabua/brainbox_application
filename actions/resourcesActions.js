import * as types from './types';
import {allTutors, getLoginUserInformation, getTutorSchedule, getTutorInformation} from '../lib/api';

export const getTutor= tutorId => {
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
    dispatch({
      type: types.ME_INFO,
      payload: userInformation,
    });
  };
};

export const getTutorSched = () => {
  return async dispatch => {
    const tutorSchedule = await getTutorSchedule();
    console.log('from api', tutorSchedule);
    dispatch({
      type: types.TUTOR_SCHEDULE,
      payload: tutorSchedule,
    });
  };
}

export const getAllTutors = () => {
  return async dispatch => {
    const tutors = await allTutors();
    dispatch({
      type: types.ALL_TUTORS,
      payload: tutors,
    });
  };
};
