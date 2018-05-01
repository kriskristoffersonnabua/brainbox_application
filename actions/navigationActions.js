import * as types from './types';

export const goToLoginPage = () => {
  return dispatch => {
    console.log("clicked");
    dispatch({
      type: types.LOGIN_PAGE,
      payload: 'Login',
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
