import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text, AsyncStorage} from 'react-native';
import BookedReview from './BookedReview';
import BookedTutorial from './BookedTutorial';
import BookedCard from './BookedCard';
import {connect} from 'react-redux';
import Actions from '../../../actions';
import {LoadingPage} from '../../reusables';
import {AccountType} from '../../../lib/constants';
const {
  getUserInformation,
  getAllBookedAppointmentsFromTutorId,
  getAllBookedAppointmentsFromClientId,
} = Actions;

const parseSchedule = bookedSchedules => {
  if (bookedSchedules != undefined && bookedSchedules.length > 0) {
    const startDate = new Date(bookedSchedules[0].date).toString();
    let startDateData = startDate.split(' ');
    console.log(startDateData);
    const endDate = new Date(
      bookedSchedules[bookedSchedules.length - 1].date,
    ).toString();
    let endDateData = endDate.split(' ');
    console.log(endDateData);
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
    };
    this.props.getUserInformation();
  }
  clearSelect = () => {
    this.setState({bookedIdSelected: false});
  };
  setIdSelected = id => {
    this.setState({bookedIdSelected: id});
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
  //TODO: program typing
  render() {
    let component;
    const {bookedIdSelected} = this.state;
    if (bookedIdSelected) {
      //booked tutorial selected
      //if (review)
      //else if (tutorial)
      //else none
      <BookedTutorial
        appointmentId={this.state.bookedIdSelected}
        clearSelect={this.clearSelect}
      />;
    } else {
      const {appointments} = this.props;
      component =
        appointments != undefined &&
        appointments.map(appointment => {
          console.log(appointment);
          return (
            <BookedCard
              programType={'sample'}
              assignedTutor={`${appointment.tutorId.firstname} ${
                appointment.tutorId.lastname
              }`}
              schedule={this.getScheduleString(appointment.bookedSchedules)}
              setIdSelected={() => this.setIdSelected(appointment._id)}
            />
          );
        });
    }
    console.log(component);
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
