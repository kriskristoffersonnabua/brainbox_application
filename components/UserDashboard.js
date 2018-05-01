import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from './Button';

class UserDashboard extends React.Component {
  render(){
    return (
      <View>
        <Text>Dashboard</Text>
        <Button type="confirm" text="logout" onPress={this.props.logout} />
      </View>
    );
  }
}

export default UserDashboard;
