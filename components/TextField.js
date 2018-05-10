import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default (TextField = props => {
  return (
    <TextInput
      style={{
        width: 265,
        height: 40,
        marginBottom: 5,
        fontFamily: 'RobotoMono-Regular'
      }}
      placeholder={props.title || ''}
      onChangeText={props.onChangeText || null}
      onFocus={props.onFocus || null}
      secureTextEntry={props.secureTextEntry || false}
      {...props}
    />
  );
});
