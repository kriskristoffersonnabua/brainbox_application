import * as types from './types';

export const goToLoginPage = () => {
  return dispatch => {
    dispatch({
      type: types.LOGIN_PAGE,
      payload: 'Login',
    });
  };
};

export const goToUserDashboard = () => {
  return dispatch => {
    dispatch({
      type: types.USER_DASHBOARD,
      payload: 'UserDashboard',
    });
  };
};

export const goToAccountSettings = () => {
  return dispatch => {
    dispatch({
      type: types.ACCOUNT_SETTINGS_PAGE,
      payload: 'AccountSettings',
    });
  };
};

export const goToAccountSettingsEdit = () => {
  return dispatch => {
    dispatch({
      type: types.ACCOUNT_SETTINGS_PAGE,
      payload: 'AccountSettingsEdit',
    });
  };
};

export const goToSignupPage = () => {
  return dispatch => {
    dispatch({
      type: types.SIGNUP_PAGE,
      payload: 'Signup',
    });
  };
};
