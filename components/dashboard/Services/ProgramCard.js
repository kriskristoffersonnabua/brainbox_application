import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {String} from '../../reusables';
import constants from '../../../lib/constants';
import {windowDimensions} from '../../../lib/device';
import {programSchedule} from '../../../lib/converter';

class ProgramCard extends React.Component {
  selectThisProgram = () => {
    this.props.selectProgram(this.props.program);
  };

  render() {
    let programType = constants.Services[this.props.program.programType];
    let information = '';
    let schedule;
    if (!!this.props.program.programType) {
      information =
        !!this.props.program.batchNumber && this.props.program.batchNumber;
    }
    if (!!this.props.program.schedule && !!this.props.program.schedule.length) {
      if (this.props.program.schedule.length > 1) {
        let parsedScheduleStartDate = programSchedule(
          this.props.program.schedule[0],
        );
        let parsedScheduleEndDate = programSchedule(
          this.props.program.schedule[this.props.program.schedule.length - 1],
        );
        parsedScheduleStartDate = parsedScheduleStartDate.date
          .toString()
          .split(' ');
        parsedScheduleEndDate = parsedScheduleEndDate.date
          .toString()
          .split(' ');
        schedule = `${parsedScheduleStartDate[1]} ${
          parsedScheduleStartDate[2]
        }, ${parsedScheduleStartDate[3]} - ${parsedScheduleEndDate[1]} ${
          parsedScheduleEndDate[2]
        }, ${parsedScheduleEndDate[3]}`;
      } else if (this.props.program.schedule.length === 1) {
        let parsedSchedule = programSchedule(this.props.program.schedule[0]);
        parsedSchedule = parsedSchedule.date.toString().split(' ');
        schedule = `${parsedSchedule[1]} ${parsedSchedule[2]} ${
          parsedSchedule[3]
        }`;
      }
    }
    return (
      <View elevation={2} style={styles.wrapper}>
        <TouchableOpacity
          onPress={this.selectThisProgram}
          style={styles.touchableWrapper}>
          <View elevation={2} style={styles.programCard}>
            <View style={styles.programInfo}>
              <String bold text={programType} />
              {!!information ? <String text={`batch ${information}`} /> : null}
              {!!schedule ? <String text={schedule} /> : null}
            </View>
            <View style={styles.slotsInfo}>
              <String bold text={'slots'} fontSize={12} />
              <String bold text={'45'} fontSize={48} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: windowDimensions.width,
    height: 'auto',
  },
  touchableWrapper: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    padding: 5,
  },
  programCard: {
    width: '90%',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0,
    height: 90,
  },
  programInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },
  slotsInfo: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderLeftWidth: 1,
    borderColor: '#b6b6b6',
  },
});

export default ProgramCard;
