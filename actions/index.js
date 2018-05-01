import {
  loggedInUser,
  signupUserAction,
  signoutUser,
  authenticateUser,
} from './userActions';
import {goToSignupPage, goToLoginPage} from './navigationActions';

export default (Actions = {
  loggedInUser,
  signupUserAction,
  signoutUser,
  authenticateUser,
  goToSignupPage,
  goToLoginPage,
});
