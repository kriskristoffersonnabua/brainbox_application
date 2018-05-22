import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import String from './String';
import {windowDimensions} from '../../lib/device';

export default (RadioButton = props => {
  let backgroundColor;
  if (props.active) {
    backgroundColor = '#9BDC97';
  } else {
    backgroundColor = '#fff';
  }
  return (
    <View
      style={[
        {
          flex: 1,
          width: props.width || '100%',
          flexDirection: 'row',
          alignItems: 'center',
        },
        props.style
      ]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          width: 18,
          height: 18,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 30,
          marginRight: 10,
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor,
            borderRadius: 30,
          }}
        />
      </TouchableOpacity>
      <String text={props.text} fontSize={11} />
    </View>
  );
});
