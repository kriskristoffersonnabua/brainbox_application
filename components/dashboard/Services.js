import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native'

const Service = props => {
  return (
    <View></View>
  )
}

class Services extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  service: {

  }
})

export default Services;
