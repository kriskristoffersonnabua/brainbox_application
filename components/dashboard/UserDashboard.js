import React from 'react';
import {StyleSheet, View, Text, Dimensions, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import Actions from '../../actions';
const {signoutUser, getUserInformation} = Actions;
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import Services from './Services';
import Bookings from './Bookings';
import LoadingPage from '../reusables/LoadingPage.js';
import Tutors from './Tutors';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const Help = props => (
  <View style={styles.container}>
    <Text>Help</Text>
  </View>
);

class UserDashboard extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Services'},
      {key: 'second', title: 'Tutors'},
      {key: 'third', title: 'Booked'},
      {key: 'fourth', title: 'Help'},
    ],
  };
  _renderScene = SceneMap({
    first: Services,
    second: Tutors,
    third: Bookings,
    fourth: Help,
  });
  _renderTutorScene = SceneMap({
    second: Tutors,
    third: Bookings,
    fourth: Help,
  });
  componentWillMount() {
    const authToken = AsyncStorage.getItem('bboxAuthToken').then(authToken => {
      if (authToken != undefined && authToken != null) {
        this.props.getUserInformation();
      }
    });
  }
  _renderHeader = props => <TabBar {...props} style={styles.header} />;
  _handleIndexChange = index => {
    this.setState({index});
  };
  render() {
    const {user} = this.props;
    let scene = this._renderScene;
    if (user != undefined) {
      switch (user.accountType) {
        case 0:
          //user is client
          scene = this._renderScene;
          break;
        case 1:
          this.state.routes = [
            {key: 'second', title: 'Tutors'},
            {key: 'third', title: 'Booked'},
            {key: 'fourth', title: 'Help'},
          ];
          scene = this._renderTutorScene;
        //user is a tutor
      }
      return (
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={scene}
          renderHeader={this._renderHeader}
          initialLayout={initialLayout}
          onIndexChange={this._handleIndexChange}
        />
      );
    } else {
      return <LoadingPage />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    width: Dimensions.get('window').width,
    height: 50,
  },
});

const mapStateToProps = state => {
  return {user: state.ResourcesReducer.user};
};

export default connect(mapStateToProps, {signoutUser, getUserInformation})(
  UserDashboard,
);
