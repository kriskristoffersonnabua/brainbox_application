import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default (ButtonComponent = props => {
  let backgroundColor;
  switch (props.type) {
    case 'confirm':
      backgroundColor = '#BDF287';
      break;
    case 'cancel':
      backgroundColor = '#E66464';
      break;
    case 'google':
      backgroundColor = '#E66464';
      break;
    case 'facebook':
      backgroundColor = '#4266B2';
      break;
    case 'warning':
      backgroundColor = '#E9905C';
      break;
    default:
      backgroundColor = '#BDF287';
  }
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: 221,
        height: 40,
        borderRadius: 25,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          color: '#fafafa',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
});
