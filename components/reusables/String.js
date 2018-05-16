import React from 'react';
import {Text} from 'react-native';
const String = props => {
  let fontFamily;
  if(props.bold){
    fontFamily = 'RobotoMono-Bold';
  }
  else if(props.italic){
    fontFamily = 'RobotoMono-Italic';
  }
  else {
    fontFamily = 'RobotoMono-Regular';
  }
  return (
    <Text
      style={[{
        fontSize: props.fontSize || 10,
        fontFamily: props.fontFamily || fontFamily,
      },props.style]}
      {...props}
      >
      {props.text}
    </Text>
  );
};
export default String;
