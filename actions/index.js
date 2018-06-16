import {
  loggedInUser,
  signupUserAction,
  signoutUser,
  authenticateUser,
  updateUserInfo,
} from './userActions';
import {
  goToSignupPage,
  goToLoginPage,
  goToAccountSettings,
  goToAccountSettingsEdit,
  goToUserDashboard,
} from './navigationActions';
import {
  getAllTutors,
  getUserInformation,
  getTutorSched,
  getTutor,
  searchTutor,
  createAppointmentAction,
} from './resourcesActions';

export default (Actions = {
  loggedInUser,
  signupUserAction,
  signoutUser,
  authenticateUser,
  goToSignupPage,
  goToLoginPage,
  getAllTutors,
  getUserInformation,
  goToUserDashboard,
  goToAccountSettings,
  goToAccountSettingsEdit,
  updateUserInfo,
  getTutorSched,
  getTutor,
  searchTutor,
  createAppointmentAction,
});
