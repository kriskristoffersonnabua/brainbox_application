import * as types from './types';
import {AsyncStorage} from 'react-native';
import {
  allTutors,
  getLoginUserInformation,
  getTutorSchedule,
  getTutorInformation,
  searchByNameAndSubject,
  createAppointment,
  createBookedSchedule,
  createGeneratedLPR,
  insertLPRAndBookedSchedules,
} from '../lib/api';

export const createAppointmentAction = (
  appointmentData,
  bookedSchedules,
  generatedLPR,
  tutorId,
) => {
  return async dispatch => {
    //populate clientId
    const clientId = await AsyncStorage.getItem('bboxUserId');
    appointmentData['clientId'] = clientId;
    //create appointment
    const appointment = await createAppointment(appointmentData);
    //assign appointmentId to all bookedSchedules
    //assign tutorId to all bookedSchedules
    for (schedule of bookedSchedules) {
      schedule['tutor'] = tutorId;
      schedule['appointment'] = appointment._id;
    }
    //assign tutorId to all generatedLPR
    //assign appointmentId to all generatedLPR
    for (lpr of generatedLPR) {
      lpr['tutor'] = tutorId;
      lpr['appointment'] = appointment._id;
    }
    //create booked schedules
    let createdBookedScheduleIds = [];
    for (bookedSchedule of bookedSchedules) {
      let createdBookedSchedule = await createBookedSchedule(bookedSchedule);
      createdBookedScheduleIds.push(createdBookedSchedule._id);
    }
    //create lpr for this appointment
    let createdLPRIds = [];
    for (lpr of generatedLPR) {
      let createdLPR = await createGeneratedLPR(lpr);
      createdLPRIds.push(createdLPR._id);
    }
    //assign createdBookedScheduleIds and createdLPRIds to appointment data
    let body = {
      bookedSchedules: createdBookedScheduleIds,
      progressReport: createdLPRIds,
    };
    let response = await insertLPRAndBookedSchedules(body, appointment._id);
    //TODO: save tutees to user profile
    // dispatch
    dispatch({
      type: types.LANDING_PAGE,
      payload: 'UserDashboard',
    });
  };
};

export const searchTutor = string => {
  return async dispatch => {
    const tutors = await searchByNameAndSubject(string);
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