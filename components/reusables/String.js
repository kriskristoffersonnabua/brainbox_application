import React from 'react';
import {Text} from 'react-native';
const String = props => {
  let fontFamily;
  if (props.bold) {
    fontFamily = 'RobotoMonoBold';
  } else if (props.italic) {
    fontFamily = 'RobotoMonoItalic';
  } else {
    fontFamily = 'RobotoMonoRegular';
  }
  const {style, fontSize, textAlign, text, color, ...otherProps} = props;
  return (
    <Text
      style={[
        {
          fontSize: fontSize || 11,
          fontFamily: props.fontFamily || fontFamily,
          textAlign: textAlign || 'center',
          color: color || '#2b2b2b',
        },
        style,
      ]}
      {...otherProps}>
      {text}
    </Text>
  );
};
export default String;
