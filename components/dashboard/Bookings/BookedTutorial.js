import React, {Component} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {LocalImage, String, Button, Subjects} from '../../reusables';
import MapView, {Marker} from 'react-native-maps';
import Dash from 'react-native-dash';
import {connect} from 'react-redux';
import Actions from '../../../actions';
import SubmitFeedbackModal from './SubmitFeedbackModal';
import LearnersProgressReport from './LPR';
const {getSelectedAppointment, getUserInformation} = Actions;

const Tutee = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 35,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      }}>
      <String
        text={`${props.tutee.firstname} ${props.tutee.lastname}`}
        fontSize={11}
      />
    </TouchableOpacity>
  );
};

const ScheduledBooking = props => {
  let date = new Date(props.date);
  let timestart;
  if (props.start < 25) {
    timestart = `${props.start / 1}:${
      (props.start % 1) * 60 < 10
        ? `0${Math.floor((props.start % 1) * 60)}`
        : `${Math.floor((props.start % 1) * 60)}`
    } ${props.start % 1 < 12 ? 'am' : 'pm'}`;
  } else {
    let time = props.start / 3600000;
    timestart = `${Math.floor(time)}:${
      (time % 1) * 60 < 10
        ? `0${(time % 1) * 60}`
        : `${Math.floor((time % 1) * 60)}`
    } ${Math.floor(time) < 12 ? 'am' : 'pm'}`;
  }
  let dateObject = date.toString().split(' ');
  let durationString = `${props.duration} hr/s`;
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
        marginBottom: 10,
      }}>
      <String
        text={`${dateObject[1]} ${dateObject[2]},${dateObject[3]}(${
          dateObject[0]
        })`}
      />
      <String text={timestart || ''} />
      <String text={durationString || ''} />
    </View>
  );
};

class BookedTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'Kris Kristofferson',
      openSubmitFeedbackModal: false,
      lastname: 'Nabua',
      address: 'V&G Subdivision, Blk. 2, Phase 4, Tacloban City, Leyte',
      addressObject: {},
      subjects: ['College Algebra', 'Science and Health'],
      scheduledBookings: [],
      progressReport: [],
      isLPRModalVisible: false,
      tutees: [
        {
          firstname: 'Kris',
          lastname: 'Nabua',
        },
        {
          firstname: 'Kris',
          lastname: 'Nabua',
        },
      ],
    };
  }
  componentWillMount() {
    this.props.getSelectedAppointment(this.props.appointmentId);
  }
  componentWillReceiveProps(nextProps) {
    const {selectedAppointment, loggedInUser: {accountType}} = nextProps;
    if (!!selectedAppointment && selectedAppointment !== null) {
      const {
        tutees,
        tutorId: {firstname, lastname},
        address,
        subjects,
        schedule,
        progressReport,
      } = selectedAppointment;
      let addressString, addressObject;
      if (!!address) {
        addressObject = JSON.parse(address);
      }
      this.setState({
        firstname,
        lastname,
        subjects,
        tutees,
        schedule,
        accountType,
        progressReport,
        address: addressObject.address,
        addressObject,
      });
    }
  }
  _toggleFeedbackModal = () => {
    this.setState({
      openSubmitFeedbackModal: !this.state.openSubmitFeedbackModal,
    });
  };
  toggleLPRModal = () => {
    this.setState(prevState => ({
      isLPRModalVisible: !prevState.isLPRModalVisible,
    }));
  };
  toggleFeedbackModal = () => {
    this.setState(prevState => ({
      openSubmitFeedbackModal: !prevState.openSubmitFeedbackModal,
    }));
  };
  render() {
    return (
      <ScrollView
        style={{
          width: '100%',
        }}>
        <SubmitFeedbackModal
          cancelFeedbackModal={() => {}}
          toggleFeedbackModal={this._toggleFeedbackModal}
          feedbackModal={this.state.openSubmitFeedbackModal}
        />
        <LearnersProgressReport
          isVisible={this.state.isLPRModalVisible}
          toggleLPRModal={this.toggleLPRModal}
          progressReport={this.state.progressReport}
        />
        <View style={styles.container}>
          <View
            style={{
              width: '100%',
              height: 25,
            }}>
            <TouchableOpacity
              onPress={this.props.clearSelect}
              style={{
                flexDirection: 'row',
                width: 60,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <LocalImage
                source={require('../../../assets/images/icons/backButton.png')}
                resize
                newWidth={15}
                newHeight={15}
              />
              <Text>BACK</Text>
            </TouchableOpacity>
          </View>
          <String text={'Booked Tutorial'} style={{marginBottom: 10}} />
          <Dash
            style={{width: '100%', height: 2, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          {!!this.state.accountType && this.state.accountType === 1 ? (
            <Button
              style={{marginBottom: 10}}
              fontSize={12}
              text={'Learners Progress Report'}
              onPress={this.toggleLPRModal}
              type="cancel"
              width={204}
              height={34}
            />
          ) : (
            <Button
              style={{marginBottom: 10}}
              fontSize={12}
              text={'Submit Feedback'}
              onPress={this.toggleFeedbackModal}
              type="confirm"
              width={204}
              height={34}
            />
          )}
          <Dash
            style={{width: '100%', height: 2, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 10,
            }}>
            <String text={'Tutor/s:'} />
            <String
              text={`${this.state.firstname} ${this.state.lastname}`}
              style={{textAlign: 'right'}}
            />
          </View>
          <Dash
            style={{width: '100%', height: 2, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          <String
            text={'Tutee/s:'}
            style={{marginBottom: 10, alignSelf: 'flex-start'}}
          />
          {this.state.tutees.map((tutee, index) => {
            return <Tutee tutee={tutee} key={index} />;
          })}
          <Dash
            style={{width: '100%', height: 2, marginTop: 10, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          <String
            text={'Address:'}
            style={{marginBottom: 10, alignSelf: 'flex-start'}}
          />
          <String text={this.state.address} style={{marginBottom: 10}} />
          <MapView
            initialRegion={{
              latitude: this.state.addressObject.latitude || 11.249999,
              longitude: this.state.addressObject.longitude || 125.0,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{
              height: 250,
              width: '100%',
              marginBottom: 10,
            }}
            provider="google"
            minZoomLevel={15}
            zoomControlEnabled={true}
            ref="maps">
            <Marker
              coordinate={{
                latitude: this.state.addressObject.latitude || 11.249999,
                longitude: this.state.addressObject.longitude || 125.0,
              }}
            />
          </MapView>
          <Dash
            style={{width: '100%', height: 2, marginTop: 10, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          <String
            text={'Subjects:'}
            style={{marginBottom: 10, alignSelf: 'flex-start'}}
          />
          <Subjects
            allSubjects={subjects => this.setState({subjects})}
            readOnly
            subjects={this.state.subjects}
          />
          <Dash
            style={{width: '100%', height: 2, marginTop: 10, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          <String
            text={'Scheduled Tutorial:'}
            style={{marginBottom: 10, alignSelf: 'flex-start'}}
          />
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {!!this.state.progressReport.length &&
              this.state.progressReport.map(report => {
                let date = report.date;
                let duration = report.duration;
                let start = report.time_start;
                return (
                  <ScheduledBooking
                    date={date}
                    duration={duration}
                    start={start}
                  />
                );
              })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
});

const mapStateToProps = state => {
  return {
    selectedAppointment: state.ResourcesReducer.selectedAppointment,
    loggedInUser: state.ResourcesReducer.user,
  };
};

// export default BookedTutorial;
export default connect(mapStateToProps, {
  getSelectedAppointment,
})(BookedTutorial);
