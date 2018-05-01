import {loggedInUser, signupUserAction, signoutUser} from './userActions';
import {goToSignupPage, goToLoginPage} from './navigationActions';

export default (Actions = {
  loggedInUser,
  signupUserAction,
  signoutUser,
  goToSignupPage,
  goToLoginPage,
});
