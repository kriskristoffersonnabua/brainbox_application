import React from 'react';
import {
  DatePickerAndroid,
  Keyboard,
  StyleSheet,
  TextInput,
  TimePickerAndroid,
} from 'react-native';

export default (TextField = props => {
  const width = props.width || 265;
  const height = props.height || 40;
  let datetimeOptions = {};
  if (props.datepicker) {
    datetimeOptions = {
      onFocus: async evt => {
        Keyboard.dismiss();
        const {action, year, month, day} = await DatePickerAndroid.open({
          date: new Date(),
        });
        if (action != DatePickerAndroid.dismissedAction) {
          const newDate = new Date(year, month, day);

          const data = newDate.toString().split(' ');
          // const newDateString = `${newDate.getMonth()}-${newDate.getDate()}-${newDate.getFullYear()}`;
          const newDateString  = `${data[1]} ${data[2]}, ${data[3]}`;
          props.focusCallback({newDate, newDateString});
        }
      },
    };
  } else if (props.timepicker) {
    datetimeOptions = {
      onFocus: async evt => {
        Keyboard.dismiss();
        const {action, hour, minute} = await TimePickerAndroid.open({
          hour: 10,
          minute: 0,
          is24Hour: false,
        });
        if (action != TimePickerAndroid.dismissedAction) {
          const newTime = hour + minute / 60;
          let newTimeString;
          if (props.format24Hour) {
            newTimeString = `${hour}:${minute < 10? `0${minute}`: minute}`;
          } else {
            newTimeString =
              hour < 12
              ? `${hour}:${minute > 9 ? minute : '0' + minute} a.m`
              : `${hour - 12}:${minute > 9 ? minute : '0' + minute} p.m`;
          }
          props.focusCallback({newTime,newTimeString});
        }
      },
    };
  }
  return (
    <TextInput
      style={[
        {
          width,
          height,
          marginBottom: 5,
          fontSize: props.fontSize || 10,
        },
        props.style,
      ]}
      secureTextEntry={props.secure || false}
      {...props}
      {...datetimeOptions}
    />
  );
});
