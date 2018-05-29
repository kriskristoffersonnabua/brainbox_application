import React from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import Signup from './Signup';
import Login from './Login';
import {
  TutorAccountSettingsEdit,
  TutorAccountSettings,
  ClientAccountSettings,
  ClientAccountSettingsEdit,
} from './AccountSettings';
import UserDashboard from './dashboard/UserDashboard';
import Layout from './layouts/dashboard-layout';
import Actions from '../actions';
const {loggedInUser, getUserInformation} = Actions;

class Home extends React.Component {
  componentWillMount() {
    this.props.loggedInUser();
    this.props.getUserInformation();
  }
  render() {
    console.log('home props:', this.props);
    let component;
    if (this.props.authToken != null) {
      const {landingPage, user} = this.props;
      if (landingPage != null){
        switch (landingPage) {
          case 'AccountSettings':
            if (user && ( user.user.accountType != 1 )) {
              component = <ClientAccountSettings />;
            }
            if (user && ( user.user.accountType == 1 )) {
              component = <TutorAccountSettings />;
            }
            break;
          case 'AccountSettingsEdit':
            if (user && user.user.accountType != 1) {
              component = <ClientAccountSettingsEdit />;
            }
            if (user && user.user.accountType == 1) {
              component = <TutorAccountSettingsEdit />;
            }
            break;
          case 'UserDashboard':
            component = <Layout template={UserDashboard} />;
            break;
          default:
            break;
        }
      }
      else {
        component = <Layout template={UserDashboard} />;
      }
    } else {
      const {landingPage, user} = this.props;
      switch (landingPage) {
        case 'Signup':
          component = <Signup />;
          break;
        case 'Login':
          component = <Login />;
          break;
        default:
          break;
      }
    }
    return <View style={styles.container}>{component}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 10,
  },
});

const mapStateToProps = state => {
  return {
    authToken:
      state.loggedInUser.authToken ||
      state.loggedInUser.authToken ||
      state.signupUserAction.authToken ||
      state.signoutUser.authToken,
    landingPage:
      state.goToLoginPage.landingPage || state.goToSignupPage.landingPage || state.goToUserDashboard.landingPage || state.signoutUser.landingPage,
    user: state.getUserInformation.user,
  };
};

export default connect(mapStateToProps, {loggedInUser, getUserInformation})(
  Home,
);
