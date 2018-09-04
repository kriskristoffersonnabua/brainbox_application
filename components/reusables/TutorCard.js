import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import LocalImage from './LocalImage';
import {windowDimensions} from '../../lib/device';

const UnavailableText = props => (
  <Text
    style={{
      backgroundColor: '#E66464',
      padding: 5,
      fontSize: 11,
      color: '#fafafa',
      borderRadius: 2,
    }}>
    UNAVAILABLE
  </Text>
);

const AvailableText = props => (
  <Text
    style={{
      backgroundColor: '#BDF287',
      padding: 5,
      fontSize: 11,
      color: '#fafafa',
      borderRadius: 2,
    }}>
    AVAILABLE
  </Text>
);

const TutorCard = props => {
  return (
    <View elevation={2} style={styles.tutorCardContainer}>
      <TouchableOpacity style={styles.tutorCard} onPress={props.onPress}>
        <LocalImage
          resize
          source={require('../../assets/images/avatars/defaultTutorAvatar.png')}
          newWidth={90}
          newHeight={90}
        />
        <View style={styles.tutorCardInformation}>
          <Text
            style={{
              fontFamily: 'curlz mt',
              fontSize: 18,
            }}>
            {props.tutorName}
          </Text>
          {props.available ? <AvailableText /> : <UnavailableText />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tutorCardContainer: {
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  tutorCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 90,
    backgroundColor: '#fafafa',
    padding: 10,
  },
  tutorCardInformation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TutorCard;
