import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text, AsyncStorage} from 'react-native';
import BookedReview from './BookedReview';
import BookedTutorial from './BookedTutorial';
import BookedCard from './BookedCard';
import {connect} from 'react-redux';
import Actions from '../../../actions';
import {LoadingPage} from '../../reusables';
import {AccountType, Services} from '../../../lib/constants';
import {programSchedule} from '../../../lib/converter';
const {
  getUserInformation,
  getAllBookedAppointmentsFromTutorId,
  getAllBookedAppointmentsFromClientId,
} = Actions;

const parseSchedule = bookedSchedules => {
  if (bookedSchedules != undefined && bookedSchedules.length > 0) {
    const startDate = new Date(bookedSchedules[0].date).toString();
    let startDateData = startDate.split(' ');
    const endDate = new Date(
      bookedSchedules[bookedSchedules.length - 1].date,
    ).toString();
    let endDateData = endDate.split(' ');
    return `${startDateData[1]} ${startDateData[2]},${startDateData[3]} - ${
      endDateData[1]
    } ${endDateData[2]},${endDateData[3]}`;
  } else return `No schedule set. That is weird.`;
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedIdSelected: false,
      programType: -1,
    };
    this.props.getUserInformation();
    // if appointment program is not null it is a one on one tutorial
    // if not it is a review, like cee review
  }
  clearSelect = () => {
    this.setState({bookedIdSelected: false});
  };
  setIdSelected = (id, programType, reviewName) => {
    this.setState({bookedIdSelected: id, programType, reviewName});
  };
  componentWillMount() {
    const {user} = this.props;
    if (user) {
      if (user.accountType == AccountType.Client) {
        AsyncStorage.getItem('bboxUserId', (error, clientId) => {
          this.props.getAllBookedAppointmentsFromClientId(clientId);
        });
      } else if (user.accountType == AccountType.Tutor) {
        AsyncStorage.getItem('bboxUserId', (error, tutorId) => {
          this.props.getAllBookedAppointmentsFromTutorId(tutorId);
        });
      }
    }
  }
  getScheduleString = schedules => {
    if (schedules != undefined) {
      if (schedules.length > 1) {
        let startSchedule = schedules[0].date.toString().split(' ');
        let endSchedule = schedules[schedules.length - 1].date
          .toString()
          .split(' ');
      }
      if (schedules.length === 0) {
        let schedule = schedules[0].date.toString().split(' ');
        return `${schedule[1]} ${schedule[2]} ${schedule[3]}`;
      }
    }
    return '';
  };
  render() {
    console.log(this.props);
    let component;
    const {bookedIdSelected, programType, reviewName = ''} = this.state;
    if (bookedIdSelected) {
      if (programType != -1) {
        component = (
          <BookedReview
            appointmentId={this.state.bookedIdSelected}
            clearSelect={this.clearSelect}
            reviewName={reviewName}
          />
        );
      } else {
        component = (
          <BookedTutorial
            appointmentId={this.state.bookedIdSelected}
            clearSelect={this.clearSelect}
          />
        );
      }
    } else {
      const {appointments} = this.props;
      component =
        appointments != undefined &&
        appointments.map((appointment, index) => {
          console.log(appointment);
          let programType, assignedTutor, batchNumber, schedule;
          if (!!appointment.program) {
            switch (appointment.program.programType) {
              case 0:
                programType = Services[0];
                break;
              case 1:
                programType = Services[1];
                break;
              case 2:
                programType = Services[2];
                break;
              case 3:
                programType = Services[3];
                break;
              default:
            }
            batchNumber = `Batch ${appointment.program.batchNumber}`;
            const scheduleLength = appointment.program.schedule.length;
            if (!!scheduleLength) {
              if (scheduleLength === 1) {
                let scheduleDate = programSchedule(
                  appointment.program.schedule[0],
                )
                  .date.toString()
                  .split(' ');
                schedule = `${scheduleDate[1]} ${scheduleDate[2]} ${
                  scheduleDate[3]
                }`;
              } else {
                let start = programSchedule(appointment.program.schedule[0])
                  .date.toString()
                  .split(' ');
                let end = programSchedule(
                  appointment.program.schedule[scheduleLength - 1],
                )
                  .date.toString()
                  .split(' ');
                schedule = `${start[1]} ${start[2]} ${start[3]} - ${end[1]} ${
                  end[2]
                } ${end[3]}`;
              }
            }
          } else {
            //program is a one on one tutorial
            programType = 'One-On-One Tutorial';
            if (!!appointment.tutorId) {
              assignedTutor = `${appointment.tutorId.firstname} ${
                appointment.tutorId.lastname
              }`;
            }
            if (!!appointment.schedule.lenth) {
              if (appointment.schedule.length !== 1) {
                schedule = `${appointment.schedule[0].ottDateString} - ${
                  appointment.schedule[appointment.schedule.length - 1]
                    .ottDateString
                }`;
              } else if (appointment.schedule.length === 1) {
                schedule = `${appointment.schedule[0].ottDateString}`;
              }
            }
          }

          return (
            <BookedCard
              key={index}
              programType={(!!programType && programType) || 'Program Title'}
              assignedTutor={assignedTutor}
              batchNumber={batchNumber}
              schedule={(!!schedule && schedule) || 'Schedule'}
              setIdSelected={() => {
                let type, reviewName;
                if (!!appointment.program) {
                  type = appointment.program.programType;
                  reviewName = programType;
                }
                this.setIdSelected(
                  appointment._id,
                  (!!type && type) || -1,
                  !!reviewName && reviewName,
                );
              }}
            />
          );
        });
    }
    return <ScrollView style={styles.container}>{component}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
});

const mapStateToProps = state => {
  return {
    user: state.ResourcesReducer.user,
    appointments: state.ResourcesReducer.appointments,
  };
};

export default connect(mapStateToProps, {
  getUserInformation,
  getAllBookedAppointmentsFromTutorId,
  getAllBookedAppointmentsFromClientId,
})(Main);
