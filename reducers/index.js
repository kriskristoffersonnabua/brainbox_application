import {combineReducers} from 'redux';
import * as types from '../actions/types';
import UserReducer from './userReducer';
import AppNavigationReducer from './appNavigationReducer';

export default combineReducers({
  loggedInUser: UserReducer,
  signupUserAction: UserReducer,
  authenticateUser: UserReducer,
  signoutUser: UserReducer,
  goToSignupPage: AppNavigationReducer,
  goToLoginPage: AppNavigationReducer,
});
