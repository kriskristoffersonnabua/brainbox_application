import React, { Component} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import BookedReview from './BookedReview';
import BookedTutorial from './BookedTutorial';

class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <BookedReview />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default index;
