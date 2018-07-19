import * as types from './types';

export const goToLoginPage = () => {
  return dispatch => {
    dispatch({
      type: types.LANDING_PAGE,
      payload: 'Login',
    });
  };
};

export const goToUserDashboard = () => {
  return dispatch => {
    dispatch({
      type: types.LANDING_PAGE,
      payload: 'UserDashboard',
    });
  };
};

export const goToAccountSettings = () => {
  return dispatch => {
    dispatch({
      type: types.LANDING_PAGE,
      payload: 'AccountSettings',
    });
  };
};

export const goToAccountSettingsEdit = () => {
  return dispatch => {
    dispatch({
      type: types.LANDING_PAGE,
      payload: 'AccountSettingsEdit',
    });
  };
};

export const goToSignupPage = () => {
  return dispatch => {
    dispatch({
      type: types.LANDING_PAGE,
      payload: 'Signup',
    });
  };
};
