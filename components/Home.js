import React from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import Signup from './Signup';
import Login from './Login';
import AccountSettings from './AccountSettings';
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
    const {landingPage} = this.props;
    switch (landingPage) {
      case 'AccountSettings':
        component = <AccountSettings />;
        break;
      case 'AccountSettingsEdit':
        component = <AccountSettings edit />;
        break;
      case 'UserDashboard':
        component = <Layout template={UserDashboard} />;
        break;
      case 'Signup':
        component = <Signup />;
        break;
      case 'Login':
        component = <Login />;
        break;
      default:
        break;
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

const mapStateToProps = (state, ownProps) => {
  return {
    landingPage:
      state.AppNavigationReducer && state.AppNavigationReducer.landingPage,
  };
};

export default connect(mapStateToProps, {loggedInUser})(Home);
