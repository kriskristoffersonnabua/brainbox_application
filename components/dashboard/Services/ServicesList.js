import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {windowDimensions} from '../../../lib/device';
import LocalImage from '../../reusables/LocalImage';

const Service = props => {
  return (
    <TouchableOpacity style={styles.serviceContainer}>
      <View elevation={2} style={styles.serviceTab}>
        <LocalImage 
          originalWidth={125}
          originalHeight={65}
          source={require('../../../assets/images/1on1tutorial.png')} />
        <View>
          <Text style={styles.serviceTypeText}>{props.serviceType}</Text>
          <Text style={styles.serviceTutorialText}>
            {props.tutorial? "TUTORIAL": "REVIEW"}
          </Text>
        </View>
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
          <Service tutorial serviceType="1 on 1 Tutorial"/>
          <Service serviceType="Civil Service Commision"/>
          <Service serviceType="College Entrance Exam"/>
          <Service serviceType="Philippine Science High School"/>
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
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  serviceTypeText: {
    fontSize: 10,
    fontFamily: 'Roboto Mono',
    textAlign: 'center'
  },
  serviceTutorialText: {
    fontSize: 32,
    fontFamily: 'Roboto Mono',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2b2b2b'
  }
});

export default Services;
