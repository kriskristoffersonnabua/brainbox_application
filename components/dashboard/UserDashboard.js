import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import Actions from '../../actions';
const {signoutUser} = Actions;
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import Services from './Services/index.js';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
const ServicesTab = props => (
  <View style={styles.container}>
    <Text>HAHAHAHA</Text>
  </View>
);
const TutorsTab = props => (
  <View style={styles.container}>
    <Text>HEY</Text>
  </View>
);
const BookedTutorials = props => (
  <View style={styles.container}>
    <Text>Booked Tutorials</Text>
  </View>
);
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
      {key: 'third', title: 'Booked Tutorials'},
      {key: 'fourth', title: 'Help'},
    ],
  };
  _renderScene = SceneMap({
    first: Services,
    second: TutorsTab,
    third: BookedTutorials,
    fourth: Help,
  });
  _renderHeader = props => <TabBar {...props} style={styles.header} />;
  _handleIndexChange = index => this.setState({index});
  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        initialLayout={initialLayout}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    width: Dimensions.get('window').width,
    height: 50,
  },
});

export default connect(null, {signoutUser})(UserDashboard);