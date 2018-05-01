import * as types from './types';
import {AsyncStorage, Alert} from 'react-native';
import {signupUser} from '../lib/api';

export const loggedInUser = () => {
  return dispatch => {
    AsyncStorage.getItem('bboxAuthToken').then(authToken => {
      dispatch({
        type: types.LOGGED_IN_USER,
        payload: authToken,
      });
    });
  };
};

export const signupUserAction = body => {
  return async dispatch => {
    const authToken = await signupUser(body);
    //if authtoken is not null dispatch
    await AsyncStorage.setItem('bboxAuthToken', authToken);
    dispatch({
      type: types.LOGGED_IN_USER,
      payload: authToken,
    });
  };
};

export const signoutUser = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('bboxAuthToken');
    const authToken = false;
    dispatch({
      type: types.LOGGED_IN_USER,
      payload: authToken,
    });
  };
};
