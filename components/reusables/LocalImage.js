import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native'
import { windowDimensions } from '../../lib/device.js';

const LocalImage = ({style, resize, scale, widthPadding, source, originalWidth, originalHeight, newWidth, newHeight}) => {
  let width, height;
  if (scale) {
    let windowWidth = windowDimensions.width;
    let widthChange = (windowWidth-(widthPadding || 0))/originalWidth;
    width = originalWidth * widthChange;
    height = originalHeight * widthChange;
  } 
  else if(resize){
    width = newWidth;
    height = newHeight;
  }
  else {
    width= originalWidth;
    height = originalHeight;
  }
  return (
    <Image 
      source={source}
      style={[{
        width,
        height,
        resizeMode: 'contain',
      },style]}
    />
  )
}

export default LocalImage;
