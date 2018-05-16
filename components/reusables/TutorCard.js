import React, { Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import LocalImage from './LocalImage';
import {windowDimensions} from '../../lib/device';

const UnavailableText = props => (<Text style={{
  backgroundColor: '#E66464',
  padding: 5,
  fontSize: 11,
  color: '#fafafa',
  borderRadius: 2
}}>UNAVAILABLE</Text>);

const AvailableText = props => (<Text style={{
  backgroundColor: '#BDF287',
  padding: 5,
  fontSize: 11,
  color: '#fafafa',
  borderRadius: 2
}}>AVAILABLE</Text>);

const TutorCard = props => {
  return (
    <View style={styles.tutorCardContainer}>
      <TouchableOpacity style={{flex: 1}}>
        <View elevation={5} style={styles.tutorCard}>
          <LocalImage 
            resize
            source={require('../../assets/images/avatars/defaultTutorAvatar.png')}
            newWidth={110}
            newHeight={120}/>
          <View style={styles.tutorCardInformation}>
            <Text style={{
              fontFamily: 'curlz mt',
              fontSize: 18
            }}>{props.tutorName}</Text>
          {props.available? <AvailableText />: <UnavailableText />}
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tutorCardContainer: {
    width: windowDimensions.width,
    height: 120,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tutorCard: {
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    height: 90,
    backgroundColor: '#fafafa'
  },
  tutorCardInformation: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TutorCard;
