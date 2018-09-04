import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {windowDimensions} from '../../../lib/device';
import Dash from 'react-native-dash';
import {Button, String, LocalImage} from '../../reusables';
import {Services} from '../../../lib/constants';
import BookReviewForm from './BookReviewForm';
import {programSchedule} from '../../../lib/converter';

const Schedule = props => {
  let schedule, date, time, duration;
  if (!!props.schedule) {
    schedule = programSchedule(props.schedule);
    duration = `${schedule.morningDuration} hour/s`;
    parsedDate = new Date(schedule.date).toString().split(' ');
    date = `${parsedDate[1]} ${parsedDate[2]} ${parsedDate[3]} (${
      parsedDate[0]
    })`;
    if ((schedule.morningTime % 1) * 60 < 10) {
      time = `${Math.floor(schedule.morningTime)}:0${(schedule.morningTime %
        1) *
        60}`;
    } else
      time = `${Math.floor(schedule.morningTime)}:${(schedule.morningTime % 1) *
        60}`;
  }
  return (
    <View
      elevation={2}
      style={{
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#BDF287',
        marginTop: 5,
        marginBottom: 5,
      }}>
      <String text={date} />
      <String text={time} />
      <String text={duration} />
    </View>
  );
};

const ProgramView = props => {
  return (
    <View style={styles.programViewContainer}>
      <View style={styles.programBody}>
        <String
          bold
          style={styles.programTitle}
          text={Services[props.program.programType]}
        />
        <Dash
          style={{width: '100%', height: 2}}
          dashLength={5}
          dashGap={5}
          dashColor={'#979797'}
        />
        <String
          style={styles.programDescription}
          text={props.program.programDescription}
        />
        <Dash
          style={{width: '100%', height: 2}}
          dashLength={5}
          dashGap={5}
          dashColor={'#979797'}
        />
        <String bold style={styles.scheduleTitle} text={'Schedule:'} />
        <ScrollView style={styles.scheduleScroll}>
          <View style={styles.scheduleBody}>
            {!!props.program &&
              !!props.program.schedule &&
              props.program.schedule.map((schedule, index) => {
                return <Schedule schedule={schedule} key={index} />;
              })}
          </View>
        </ScrollView>
      </View>
      <BookReviewForm
        showForm={props.showForm}
        unShowBookForm={props.unShowBookForm}
        programId={props.program._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  programContainer: {
    width: windowDimensions.width,
    height: 'auto',
  },
  backButton: {},
  ctaContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  programBody: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  programTitle: {
    fontSize: 18,
    padding: 10,
  },
  programDescription: {
    fontSize: 14,
    padding: 10,
  },
  scheduleTitle: {
    fontSize: 14,
    alignSelf: 'flex-start',
    padding: 10,
  },
  scheduleScroll: {
    width: '100%',
    height: 200,
  },
  scheduleBody: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default ProgramView;
