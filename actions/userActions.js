import * as types from './types';
import {AsyncStorage, Alert} from 'react-native';
import {signupUser, loginUser} from '../lib/api';

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
    const response = await signupUser(body);
    //if authtoken is not null dispatch
    await AsyncStorage.setItem('bboxAuthToken', response.authToken);
    await AsyncStorage.setItem('bboxUserId', response.userId);
    dispatch({
      type: types.LOGGED_IN_USER,
      payload: response.authToken,
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

export const authenticateUser = body => {
  return async dispatch => {
    const response = await loginUser(body);
    //if authtoken is not null dispatch
    if (response.error == null) {
      await AsyncStorage.setItem('bboxAuthToken', response.authToken);
      await AsyncStorage.setItem('bboxUserId', response.userId);
      dispatch({
        type: types.LOGGED_IN_USER,
        payload: response.authToken,
      });
    } else {
      Alert.alert(response.error);
      return;
    }
  };
};
