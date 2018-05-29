import * as types from './types';
import {AsyncStorage, Alert} from 'react-native';
import {signupUser, loginUser, updateUserInformation} from '../lib/api';

export const loggedInUser = () => {
  return dispatch => {
    AsyncStorage.getItem('bboxAuthToken').then(authToken => {
      console.log('currently logged in user:', authToken);
      if (authToken != undefined) {
        dispatch({
          type: types.LOGGED_IN_USER,
          payload: authToken,
        });
      } else {
        dispatch({
          type: types.LOGGED_OUT_USER,
        });
      }
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
    dispatch({
      type: types.LOGGED_OUT_USER,
    });
  };
};

export const updateUserInfo = body => {
  return async dispatch => {
    await updateUserInformation(body);
    dispatch({
      type: types.ACCOUNT_SETTINGS_PAGE,
      payload: 'AccountSettings',
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
      });
    } else {
      Alert.alert(response.error);
      return;
    }
  };
};
