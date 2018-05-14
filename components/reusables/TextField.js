import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default (TextField = props => {
  const width = props.width || 265;
  const height = props.height || 40;

  return (
    <TextInput
      style={[{
        width,
        height,
        marginBottom: 5,
        fontSize: props.fontSize || 10 
      },props.style]}
      secureTextEntry={props.secure || false}
      {...props}
    />
  );
});
