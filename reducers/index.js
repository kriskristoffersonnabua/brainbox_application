import {combineReducers} from 'redux';
import * as types from '../actions/types';
import UserReducer from './userReducer';
import AppNavigationReducer from './appNavigationReducer';
import ResourcesReducer from './resourcesReducers';

export default combineReducers({
  loggedInUser: UserReducer,
  signupUserAction: UserReducer,
  authenticateUser: UserReducer,
  signoutUser: UserReducer,
  goToSignupPage: AppNavigationReducer,
  goToLoginPage: AppNavigationReducer,
  goToAccountSettings: AppNavigationReducer,
  goToAccountSettingsEdit: AppNavigationReducer,
  goToUserDashboard: AppNavigationReducer,
  getAllTutors: ResourcesReducer,
  getUserInformation: ResourcesReducer,
  getTutorSched: ResourcesReducer,
  getTutor: ResourcesReducer
});
