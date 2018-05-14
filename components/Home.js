import React from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import Signup from './Signup';
import Login from './Login';
import UserDashboard from './dashboard/UserDashboard';
import Layout from './layouts/dashboard-layout';
import Actions from '../actions';
const {loggedInUser} = Actions;

class Home extends React.Component {
  componentWillMount() {
    this.props.loggedInUser();
  }
  render() {
    let component;
    console.log(AsyncStorage);
    console.log(this.props.authToken);
    if (this.props.authToken != null) {
      component = <Layout template={UserDashboard} />;
    } else {
      component =
        this.props.landingPage == 'Signup' ? (
          <Signup />
        ) : this.props.landingPage == 'Login' ? (
          <Login loginUser={this.props.authenticateUser} />
        ) : (
          <Login />
        );
    }
    return <View style={styles.container}>{component}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
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
