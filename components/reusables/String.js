import React from 'react';
import {Text} from 'react-native';
const String = props => {
  let fontFamily;
  if(props.bold){
    fontFamily = 'RobotoMonoBold';
  }
  else if(props.italic){
    fontFamily = 'RobotoMonoItalic';
  }
  else {
    fontFamily = 'RobotoMonoRegular';
  }
  return (
    <Text
      style={[{
        fontSize: props.fontSize || 10,
        fontFamily: props.fontFamily || fontFamily,
        textAlign: props.textAlign || 'center'
      },props.style]}
      {...props}
      >
      {props.text}
    </Text>
  );
};
export default String;
