import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {windowDimensions} from '../../lib/device.js';
import LocalImage from './LocalImage.js';

const LoadingPage = props => {
  return (
    <View style={styles.loadingContainer}>
      <LocalImage
        scale
        source={require('../../assets/images/icons/brainboxlogo.png')}
        widthPadding={50}
        originalWidth={708 / 2}
        originalHeight={708 / 2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
});

export default LoadingPage;
