import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import Signup from './Signup';
import Login from './Login';
import UserDashboard from './dashboard/UserDashboard';
import Layout from './layouts/dashboard-layout';
import Actions from '../actions';
import {MenuProvider} from 'react-native-popup-menu';
const {loggedInUser} = Actions;

class Home extends React.Component {
  componentWillMount() {
    this.props.loggedInUser();
  }
  render() {
    let component;
    if (true) {
      component = <Layout template={UserDashboard} />;
    } else {
      component =
        this.props.landingPage == 'Signup' ? (
          <Signup />
        ) : this.props.landingPage == 'Login' ? (
          <Login loginUser={this.props.authenticateUser} />
        ) : (
          <Signup />
        );
    }
    return (
      <MenuProvider style={styles.container}>
        {component}
      </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

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

export default connect(mapStateToProps, {loggedInUser})(Home);
