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

const Schedule = props => {
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
      <String text={'4-12-2018'} />
      <String text={'8:30'} />
      <String text={'4 hours'} />
    </View>
  );
};

const ProgramView = props => {
  console.log(props);
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
              props.program.schedule.map(schedule => {
                return <Schedule schedule={schedule} />;
              })}
          </View>
        </ScrollView>
      </View>
      <BookReviewForm
        showForm={props.showForm}
        unShowBookForm={props.unShowBookForm}
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
