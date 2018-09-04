import * as types from './types';
import {AsyncStorage, Alert} from 'react-native';
import {
  signupUser,
  loginUser,
  updateUserInformation,
  loginFBUser,
  verifyEmailExisting,
} from '../lib/api';

export const loggedInUser = () => {
  return dispatch => {
    AsyncStorage.getItem('bboxAuthToken').then(authToken => {
      if (authToken != undefined && authToken != null)
        dispatch({
          type: types.LANDING_PAGE,
          payload: 'UserDashboard',
        });
      else {
        dispatch({
          type: types.LANDING_PAGE,
          payload: 'Login',
        });
      }
    });
  };
};

export const signupUserAction = body => {
  return async dispatch => {
    const response = await signupUser(body);
    //if authtoken is not null dispatch
    if (response.error == null) {
      await AsyncStorage.setItem('bboxAuthToken', response.authToken);
      await AsyncStorage.setItem('bboxUserId', response.userId);
      dispatch({
        type: types.LANDING_PAGE,
        payload: 'UserDashboard',
      });
    } else {
      Alert.alert(response.error);
      return;
    }
  };
};

export const signoutUser = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('bboxAuthToken');
    dispatch({
      type: types.LANDING_PAGE,
      payload: 'Login',
    });
  };
};

export const updateUserInfo = body => {
  return async dispatch => {
    try {
      await updateUserInformation(body);
      dispatch({
        type: types.LANDING_PAGE,
        payload: 'AccountSettings',
      });
    } catch (exception) {
      console.log(exception);
    }
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
        type: types.LANDING_PAGE,
        payload: 'UserDashboard',
      });
    } else {
      Alert.alert(response.error);
      return;
    }
  };
};

export const authenticateFBUser = body => {
  return async dispatch => {
    const response = await loginFBUser(body);
    //if authtoken is not null dispatch
    if (response.error == null) {
      await AsyncStorage.setItem('bboxAuthToken', response.authToken);
      await AsyncStorage.setItem('bboxUserId', response.userId);
      dispatch({
        type: types.LANDING_PAGE,
        payload: 'UserDashboard',
      });
    } else {
      Alert.alert(response.error);
      return;
    }
  };
};
