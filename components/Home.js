import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import Signup from './Signup';
import Login from './Login';
import UserDashboard from './UserDashboard';
import Actions from '../actions';
const {
  signupUserAction,
  loggedInUser,
  signoutUser,
  goToSignupPage,
  goToLoginPage,
  authenticateUser,
} = Actions;

class Home extends React.Component {
  componentWillMount() {
    this.props.loggedInUser();
  }
  render() {
    let component;
    console.log(this.props);
    if (this.props.authToken) {
      component = <UserDashboard logout={this.props.signoutUser} />;
    } else {
      component =
        this.props.landingPage == 'Signup' ? (
          <Signup
            signup={this.props.signupUserAction}
            loginpage={this.props.goToLoginPage}
          />
        ) : this.props.landingPage == 'Login' ? (
          <Login
            signuppage={this.props.goToSignupPage}
            loginUser={this.props.authenticateUser}
          />
        ) : (
          <Signup
            signup={this.props.signupUserAction}
            loginpage={this.props.goToLoginPage}
          />
        );
    }
    return <View>{component}</View>;
  }
}

const mapStateToProps = state => {
  return {
    authToken:
      state.loggedInUser.authToken ||
      state.loggedInUser.authToken ||
      state.signupUserAction.authTOken,
    landingPage:
      state.goToLoginPage.landingPage || state.goToSignupPage.landingPage,
  };
};

export default connect(mapStateToProps, {
  loggedInUser,
  goToSignupPage,
  goToLoginPage,
  signoutUser,
  signupUserAction,
  authenticateUser,
})(Home);
