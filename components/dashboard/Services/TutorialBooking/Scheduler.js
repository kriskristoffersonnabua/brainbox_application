import React, {Component} from 'react';
import {TextField, String} from '../../../reusables';
import {View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {
  parseWeekdaySchedule,
  insertWeekdayScheduleData,
} from '../../../../lib/converter';

const WeekDay = props => {
  let active;
  if (props.active) {
    backgroundColor = '#9BDC97';
    color = '#fafafa';
  } else {
    backgroundColor = '#979797';
    color = '#2b2b2b';
  }
  return (
    <TouchableOpacity
      onPress={props.onPress || null}
      {...props}
      style={[
        {
          padding: 2,
          alignItems: 'center',
          backgroundColor,
          borderRadius: 1,
          height: 18,
          justifyContent: 'center',
          width: 40,
        },
        props.style,
      ]}>
      <String
        text={props.text}
        fontSize={7}
        style={{
          color,
        }}
      />
    </TouchableOpacity>
  );
};

class Scheduler extends Component {
  constructor(props) {
    super(props);
    let monday = '1:false:0-0:0-0';
    let tuesday = '2:false:0-0:0-0';
    let wednesday = '3:false:0-0:0-0';
    let thursday = '4:false:0-0:0-0';
    let friday = '5:false:0-0:0-0';
    let saturday = '6:false:0-0:0-0';
    let sunday = '0:false:0-0:0-0';
    this.state = {
      monday,
      mondaySchedule: parseWeekdaySchedule(monday),
      tuesday,
      tuesdaySchedule: parseWeekdaySchedule(tuesday),
      wednesday,
      wednesdaySchedule: parseWeekdaySchedule(wednesday),
      thursday,
      thursdaySchedule: parseWeekdaySchedule(thursday),
      friday,
      fridaySchedule: parseWeekdaySchedule(friday),
      saturday,
      saturdaySchedule: parseWeekdaySchedule(saturday),
      sunday,
      sundaySchedule: parseWeekdaySchedule(sunday),

      //monday schedule data
      mondayMorningTimeString: '',
      mondayAfternoonTimeString: '',
      //tuesday schedule data
      tuesdayMorningTimeString: '',
      tuesdayAfternoonTimeString: '',
      //wednesday schedule data
      wednesdayMorningTimeString: '',
      wednesdayAfternoonTimeString: '',
      //thursday schedule data
      thursdayMorningTimeString: '',
      thursdayAfternoonTimeString: '',
      //friday schedule data
      fridayMorningTimeString: '',
      fridayAfternoonTimeString: '',
      //saturday schedule data
      saturdayMorningTimeString: '',
      saturdayAfternoonTimeString: '',
      //sunday schedule data
      sundayMorningTimeString: '',
      sundayAfternoonTimeString: '',
    };
  }

  _allSchedule = () => {
    const {
      mondaySchedule,
      tuesdaySchedule,
      wednesdaySchedule,
      thursdaySchedule,
      fridaySchedule,
      saturdaySchedule,
      sundaySchedule,
    } = this.state;
    this.props.onScheduleChange({
      0: sundaySchedule,
      1: mondaySchedule,
      2: tuesdaySchedule,
      3: wednesdaySchedule,
      4: thursdaySchedule,
      5: fridaySchedule,
      6: saturdaySchedule,
    });
  };

  _weekdayHeader = weekday => {
    let data, newSchedule;
    switch (weekday) {
      case 0:
        data = this.state.mondaySchedule.active ? 'false' : 'true';
        newSchedule = insertWeekdayScheduleData(
          this.state.monday,
          data,
          'active',
        );
        this.setState(
          {
            monday: newSchedule,
            mondaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 1:
        data = this.state.tuesdaySchedule.active ? 'false' : 'true';
        newSchedule = insertWeekdayScheduleData(
          this.state.tuesday,
          data,
          'active',
        );
        this.setState(
          {
            tuesday: newSchedule,
            tuesdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 2:
        data = this.state.wednesdaySchedule.active ? 'false' : 'true';
        newSchedule = insertWeekdayScheduleData(
          this.state.wednesday,
          data,
          'active',
        );
        this.setState(
          {
            wednesday: newSchedule,
            wednesdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 3:
        data = this.state.thursdaySchedule.active ? 'false' : 'true';
        newSchedule = insertWeekdayScheduleData(
          this.state.thursday,
          data,
          'active',
        );
        this.setState(
          {
            thursday: newSchedule,
            thursdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 4:
        data = this.state.fridaySchedule.active ? 'false' : 'true';
        newSchedule = insertWeekdayScheduleData(
          this.state.friday,
          data,
          'active',
        );
        this.setState(
          {
            friday: newSchedule,
            fridaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 5:
        data = this.state.saturdaySchedule.active ? 'false' : 'true';
        newSchedule = insertWeekdayScheduleData(
          this.state.saturday,
          data,
          'active',
        );
        this.setState(
          {
            saturday: newSchedule,
            saturdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 6:
        data = this.state.sundaySchedule.active ? 'false' : 'true';
        newSchedule = insertWeekdayScheduleData(
          this.state.sunday,
          data,
          'active',
        );
        this.setState(
          {
            sunday: newSchedule,
            sundaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      default:
        break;
    }
  };

  _morningTimeHandler = (weekday, newTime, newTimeString) => {
    let newSchedule;
    switch (weekday) {
      case 0:
        newSchedule = insertWeekdayScheduleData(
          this.state.monday,
          `${newTime}`,
          'morningTime',
        );
        this.setState(
          {
            monday: newSchedule,
            mondaySchedule: parseWeekdaySchedule(newSchedule),
            mondayMorningTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 1:
        newSchedule = insertWeekdayScheduleData(
          this.state.tuesday,
          `${newTime}`,
          'morningTime',
        );
        this.setState(
          {
            tuesday: newSchedule,
            tuesdaySchedule: parseWeekdaySchedule(newSchedule),
            tuesdayMorningTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 2:
        newSchedule = insertWeekdayScheduleData(
          this.state.wednesday,
          `${newTime}`,
          'morningTime',
        );
        this.setState(
          {
            wednesday: newSchedule,
            wednesdaySchedule: parseWeekdaySchedule(newSchedule),
            wednesdayMorningTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 3:
        newSchedule = insertWeekdayScheduleData(
          this.state.thursday,
          `${newTime}`,
          'morningTime',
        );
        this.setState(
          {
            thursday: newSchedule,
            thursdaySchedule: parseWeekdaySchedule(newSchedule),
            thursdayMorningTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 4:
        newSchedule = insertWeekdayScheduleData(
          this.state.friday,
          `${newTime}`,
          'morningTime',
        );
        this.setState(
          {
            friday: newSchedule,
            fridaySchedule: parseWeekdaySchedule(newSchedule),
            fridayMorningTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 5:
        newSchedule = insertWeekdayScheduleData(
          this.state.saturday,
          `${newTime}`,
          'morningTime',
        );
        this.setState(
          {
            saturday: newSchedule,
            saturdaySchedule: parseWeekdaySchedule(newSchedule),
            saturdayMorningTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 6:
        newSchedule = insertWeekdayScheduleData(
          this.state.sunday,
          `${newTime}`,
          'morningTime',
        );
        this.setState(
          {
            sunday: newSchedule,
            sundaySchedule: parseWeekdaySchedule(newSchedule),
            sundayMorningTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      default:
        break;
    }
  };

  _morningHoursHandler = (weekday, hours) => {
    let newSchedule;
    switch (weekday) {
      case 0:
        newSchedule = insertWeekdayScheduleData(
          this.state.monday,
          hours.length < 1 ? '0' : hours,
          'morningHours',
        );
        this.setState(
          {
            monday: newSchedule,
            mondaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 1:
        newSchedule = insertWeekdayScheduleData(
          this.state.tuesday,
          hours.length < 1 ? '0' : hours,
          'morningHours',
        );
        this.setState(
          {
            tuesday: newSchedule,
            tuesdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 2:
        newSchedule = insertWeekdayScheduleData(
          this.state.wednesday,
          hours.length < 1 ? '0' : hours,
          'morningHours',
        );
        this.setState(
          {
            wednesday: newSchedule,
            wednesdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 3:
        newSchedule = insertWeekdayScheduleData(
          this.state.thursday,
          hours.length < 1 ? '0' : hours,
          'morningHours',
        );
        this.setState(
          {
            thursday: newSchedule,
            thursdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 4:
        newSchedule = insertWeekdayScheduleData(
          this.state.friday,
          hours.length < 1 ? '0' : hours,
          'morningHours',
        );
        this.setState(
          {
            friday: newSchedule,
            fridaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 5:
        newSchedule = insertWeekdayScheduleData(
          this.state.saturday,
          hours.length < 1 ? '0' : hours,
          'morningHours',
        );
        this.setState(
          {
            saturday: newSchedule,
            saturdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 6:
        newSchedule = insertWeekdayScheduleData(
          this.state.sunday,
          hours.length < 1 ? '0' : hours,
          'morningHours',
        );
        this.setState(
          {
            sunday: newSchedule,
            sundaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      default:
        break;
    }
  };

  _afternoonTimeHandler = (weekday, newTime, newTimeString) => {
    let newSchedule;
    switch (weekday) {
      case 0:
        newSchedule = insertWeekdayScheduleData(
          this.state.monday,
          `${newTime}`,
          'afternoonTime',
        );
        this.setState(
          {
            monday: newSchedule,
            mondaySchedule: parseWeekdaySchedule(newSchedule),
            mondayAfternoonTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 1:
        newSchedule = insertWeekdayScheduleData(
          this.state.tuesday,
          `${newTime}`,
          'afternoonTime',
        );
        this.setState(
          {
            tuesday: newSchedule,
            tuesdaySchedule: parseWeekdaySchedule(newSchedule),
            tuesdayAfternoonTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 2:
        newSchedule = insertWeekdayScheduleData(
          this.state.wednesday,
          `${newTime}`,
          'afternoonTime',
        );
        this.setState(
          {
            wednesday: newSchedule,
            wednesdaySchedule: parseWeekdaySchedule(newSchedule),
            wednesdayAfternoonTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 3:
        newSchedule = insertWeekdayScheduleData(
          this.state.thursday,
          `${newTime}`,
          'afternoonTime',
        );
        this.setState(
          {
            thursday: newSchedule,
            thursdaySchedule: parseWeekdaySchedule(newSchedule),
            thursdayAfternoonTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 4:
        newSchedule = insertWeekdayScheduleData(
          this.state.friday,
          `${newTime}`,
          'afternoonTime',
        );
        this.setState(
          {
            friday: newSchedule,
            fridaySchedule: parseWeekdaySchedule(newSchedule),
            fridayAfternoonTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 5:
        newSchedule = insertWeekdayScheduleData(
          this.state.saturday,
          `${newTime}`,
          'afternoonTime',
        );
        this.setState(
          {
            saturday: newSchedule,
            saturdaySchedule: parseWeekdaySchedule(newSchedule),
            saturdayAfternoonTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      case 6:
        newSchedule = insertWeekdayScheduleData(
          this.state.sunday,
          `${newTime}`,
          'afternoonTime',
        );
        this.setState(
          {
            sunday: newSchedule,
            sundaySchedule: parseWeekdaySchedule(newSchedule),
            sundayAfternoonTimeString: newTimeString,
          },
          this._allSchedule,
        );
        break;
      default:
        break;
    }
  };

  _afternoonHoursHandler = (weekday, hours) => {
    let newSchedule;
    switch (weekday) {
      case 0:
        newSchedule = insertWeekdayScheduleData(
          this.state.monday,
          hours.length < 1 ? '0' : hours,
          'afternoonHours',
        );
        this.setState(
          {
            monday: newSchedule,
            mondaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 1:
        newSchedule = insertWeekdayScheduleData(
          this.state.tuesday,
          hours.length < 1 ? '0' : hours,
          'afternoonHours',
        );
        this.setState(
          {
            tuesday: newSchedule,
            tuesdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 2:
        newSchedule = insertWeekdayScheduleData(
          this.state.wednesday,
          hours.length < 1 ? '0' : hours,
          'afternoonHours',
        );
        this.setState(
          {
            wednesday: newSchedule,
            wednesdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 3:
        newSchedule = insertWeekdayScheduleData(
          this.state.thursday,
          hours.length < 1 ? '0' : hours,
          'afternoonHours',
        );
        this.setState(
          {
            thursday: newSchedule,
            thursdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 4:
        newSchedule = insertWeekdayScheduleData(
          this.state.friday,
          hours.length < 1 ? '0' : hours,
          'afternoonHours',
        );
        this.setState(
          {
            friday: newSchedule,
            fridaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 5:
        newSchedule = insertWeekdayScheduleData(
          this.state.saturday,
          hours.length < 1 ? '0' : hours,
          'afternoonHours',
        );
        this.setState(
          {
            saturday: newSchedule,
            saturdaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      case 6:
        newSchedule = insertWeekdayScheduleData(
          this.state.sunday,
          hours.length < 1 ? '0' : hours,
          'afternoonHours',
        );
        this.setState(
          {
            sunday: newSchedule,
            sundaySchedule: parseWeekdaySchedule(newSchedule),
          },
          this._allSchedule,
        );
        break;
      default:
        break;
    }
  };

  render() {
    const {
      mondaySchedule,
      tuesdaySchedule,
      wednesdaySchedule,
      thursdaySchedule,
      fridaySchedule,
      saturdaySchedule,
      sundaySchedule,
    } = this.state;
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.weekHeader}>
          <WeekDay
            onPress={e => this._weekdayHeader(0)}
            active={mondaySchedule.active}
            text={'Mon'}
          />
          <WeekDay
            onPress={e => this._weekdayHeader(1)}
            active={tuesdaySchedule.active}
            text={'Tue'}
          />
          <WeekDay
            onPress={e => this._weekdayHeader(2)}
            active={wednesdaySchedule.active}
            text={'Wed'}
          />
          <WeekDay
            onPress={e => this._weekdayHeader(3)}
            active={thursdaySchedule.active}
            text={'Thu'}
          />
          <WeekDay
            onPress={e => this._weekdayHeader(4)}
            active={fridaySchedule.active}
            text={'Fri'}
          />
          <WeekDay
            onPress={e => this._weekdayHeader(5)}
            active={saturdaySchedule.active}
            text={'Sat'}
          />
          <WeekDay
            onPress={e => this._weekdayHeader(6)}
            active={sundaySchedule.active}
            text={'Sun'}
          />
        </View>
        <String
          text={'Morning'}
          style={{alignSelf: 'flex-start', paddingLeft: 5, paddingTop: 2}}
        />
        <View style={styles.scheduleContainer}>
          <View style={styles.fields}>
            <View style={styles.timeFields}>
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._morningTimeHandler(0, newTime, newTimeString);
                }}
                value={this.state.mondayMorningTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._morningTimeHandler(1, newTime, newTimeString);
                }}
                value={this.state.tuesdayMorningTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._morningTimeHandler(2, newTime, newTimeString);
                }}
                value={this.state.wednesdayMorningTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._morningTimeHandler(3, newTime, newTimeString);
                }}
                value={this.state.thursdayMorningTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._morningTimeHandler(4, newTime, newTimeString);
                }}
                value={this.state.fridayMorningTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._morningTimeHandler(5, newTime, newTimeString);
                }}
                value={this.state.saturdayMorningTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._morningTimeHandler(6, newTime, newTimeString);
                }}
                value={this.state.sundayMorningTimeString}
              />
            </View>
            <View style={styles.durationFields}>
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._morningHoursHandler(0, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._morningHoursHandler(1, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._morningHoursHandler(2, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._morningHoursHandler(3, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._morningHoursHandler(4, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._morningHoursHandler(5, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._morningHoursHandler(6, value);
                }}
              />
            </View>
          </View>
        </View>
        <String
          text={'Afternoon'}
          style={{alignSelf: 'flex-start', paddingLeft: 5, paddingTop: 2}}
        />
        <View style={styles.scheduleContainer}>
          <View style={styles.fields}>
            <View style={styles.timeFields}>
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._afternoonTimeHandler(0, newTime, newTimeString);
                }}
                value={this.state.mondayAfternoonTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._afternoonTimeHandler(1, newTime, newTimeString);
                }}
                value={this.state.tuesdayAfternoonTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._afternoonTimeHandler(2, newTime, newTimeString);
                }}
                value={this.state.wednesdayAfternoonTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._afternoonTimeHandler(3, newTime, newTimeString);
                }}
                value={this.state.thursdayAfternoonTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._afternoonTimeHandler(4, newTime, newTimeString);
                }}
                value={this.state.fridayAfternoonTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                timepicker
                format24Hour
                focusCallback={({newTime, newTimeString}) => {
                  this._afternoonTimeHandler(5, newTime, newTimeString);
                }}
                value={this.state.saturdayAfternoonTimeString}
              />
              <TextField
                fontSize={10}
                placeholder={'Time'}
                width={40}
                format24Hour
                timepicker
                focusCallback={({newTime, newTimeString}) => {
                  this._afternoonTimeHandler(6, newTime, newTimeString);
                }}
                value={this.state.sundayAfternoonTimeString}
              />
            </View>
            <View style={styles.durationFields}>
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._afternoonHoursHandler(0, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._afternoonHoursHandler(1, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._afternoonHoursHandler(2, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._afternoonHoursHandler(3, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._afternoonHoursHandler(4, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._afternoonHoursHandler(5, value);
                }}
              />
              <TextField
                fontSize={10}
                placeholder={'Hours'}
                width={40}
                keyboardType="numeric"
                onChangeText={value => {
                  this._afternoonHoursHandler(6, value);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scheduleContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  durationFields: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeFields: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fields: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    // width: '100%',
    flex: 1,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#979797',
    marginLeft: 30,
  },
  weekHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Scheduler;
