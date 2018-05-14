import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {windowDimensions} from '../../lib/device';
import LocalImage from '../reusables/LocalImage';

const Service = props => {
  return (
    <TouchableOpacity style={styles.serviceContainer}>
      <View elevation={2} style={styles.serviceTab}>
        <LocalImage 
          width={125}
          height={65}
          source={require('../../assets/images/1on1tutorial.png')} />
        <Text>
          1on1 Tutorial
        </Text>
      </View>
    </TouchableOpacity>
  );
};

class Services extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.services}>
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  services: {
    flex: 1,
  },
  serviceContainer: {
    width: windowDimensions.width,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceTab: {
    width: windowDimensions.width * 0.9,
    height: 97,
    borderRadius: 10,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Services;
