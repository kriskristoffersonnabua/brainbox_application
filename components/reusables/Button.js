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
  const width = props.width || 220;
  const height = props.height || 40;
  return (
    <TouchableOpacity
      onPress={props.onPress || null}
      style={[{
        width,
        height,
        borderRadius: 25,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      },props.style]}>
      <Text
        style={{
          fontSize: props.fontSize || 18,
          textAlign: 'center',
          color: '#fafafa',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
});
