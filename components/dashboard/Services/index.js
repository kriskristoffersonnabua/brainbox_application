import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native'
import ServicesList from './ServicesList';
import SearchTutor from './SearchTutor';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchTutor />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Main;
