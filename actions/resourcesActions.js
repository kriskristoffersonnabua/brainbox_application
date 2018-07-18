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
  getAppointmentsByTutorId,
  getAppointmentsByClientId,
  updateUserInformation,
  getAppointment,
  getAllReviewProgramsByType,
} from '../lib/api';

export const getAllOOOTutorials = () => {
  return async dispatch => {
    const availablePrograms = await getAllReviewProgramsByType(0);
    dispatch({
      type: types.AVAILABLE_PROGRAMS,
      payload: availablePrograms,
    });
  };
};

export const getAllCSCPrograms = () => {
  return async dispatch => {
    const availablePrograms = await getAllReviewProgramsByType(1);
    dispatch({
      type: types.AVAILABLE_PROGRAMS,
      payload: availablePrograms,
    });
  };
};

export const getAllPSHSPrograms = () => {
  return async dispatch => {
    const availablePrograms = await getAllReviewProgramsByType(2);
    dispatch({
      type: types.AVAILABLE_PROGRAMS,
      payload: availablePrograms,
    });
  };
};

export const getAllCEEPrograms = () => {
  return async dispatch => {
    const availablePrograms = await getAllReviewProgramsByType(3);
    dispatch({
      type: types.AVAILABLE_PROGRAMS,
      payload: availablePrograms,
    });
  };
};

export const selectProgram = program => {
  return async dispatch => {
    dispatch({
      type: types.PROGRAM_SELECTED,
      payload: program,
    });
  };
};

// get appointment using the appointmentId given by the applications
export const getSelectedAppointment = appointmentId => {
  return async dispatch => {
    const appointment = await getAppointment(tutorId);
    dispatch({
      type: types.SELECTED_APPOINTMENT,
      payload: appointment,
    });
  };
};

export const getAllBookedAppointmentsFromTutorId = tutorId => {
  return async dispatch => {
    const appointments = await getAppointmentsByTutorId(tutorId);
    dispatch({
      type: types.BOOKED_TUTORIALS,
      payload: appointments,
    });
  };
};

export const getAllBookedAppointmentsFromClientId = clientId => {
  return async dispatch => {
    const appointments = await getAppointmentsByClientId(clientId);
    dispatch({
      type: types.BOOKED_TUTORIALS,
      payload: appointments,
    });
  };
};

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
    await insertLPRAndBookedSchedules(body, appointment._id);

    //update user tutees list
    let data = {
      tutees: appointmentData.tutees,
    };
    await updateUserInformation(data);

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
      type: types.TUTOR_INFO,
      payload: tutorInformation.tutor,
    });
  };
};

export const getUserInformation = () => {
  return async dispatch => {
    const userInformation = await getLoginUserInformation();
    if (userInformation) {
      dispatch({
        type: types.ME_INFO,
        payload: userInformation.user,
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
