import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native'

class Programs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.programs}>
        <View><Text>haha</Text></View>
        <View><Text>haha</Text></View>
        <View><Text>haha</Text></View>
        <View><Text>haha</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  programs: {
    flex: 1
  }
})

export default Programs;
