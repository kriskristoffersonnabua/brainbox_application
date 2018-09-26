import React, {Component} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import {LocalImage, String, Button, Subjects} from '../../reusables';
import MapView, {Marker} from 'react-native-maps';
import Dash from 'react-native-dash';
import {connect} from 'react-redux';
import Actions from '../../../actions';
const {getSelectedAppointment} = Actions;
import {programSchedule} from '../../../lib/converter';
import SubmitFeedbackModal from './SubmitFeedbackModal';

const ScheduledBooking = props => {
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
      <String text={props.dateString} />
      <String text={props.scheduleString} />
    </View>
  );
};

class BookedTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'Kris Kristofferson',
      lastname: 'Nabua',
      address: 'V&G Subdivision, Blk. 2, Phase 4, Tacloban City, Leyte',
      subjects: ['College Algebra', 'Science and Health'],
      scheduledBookings: [],
      feedbackModal: false,
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
      address: {
        address:
          '165 Avenida Veteranos, Downtown, Tacloban City, 6500 Leyte, Philippines',
        east: 125.00217583029146,
        latitude: 11.24156750000001,
        longitude: 125.00101953124998,
        name: `11°14'29.6"N 125°00'03.7"E`,
        north: 11.243089380291503,
        placeID: '7Q3762R2+JCCP',
        south: 11.240391419708498,
      },
    };
  }
  componentWillReceiveProps(nextProps) {
    const {selectedAppointment} = nextProps;
    if (!!selectedAppointment) {
      this.setState({selectedAppointment});
    }
  }
  componentWillMount() {
    this.props.getSelectedAppointment(this.props.appointmentId);
  }
  _toggleFeedbackModal = () => {
    this.setState(prevState => {
      return {
        feedbackModal: !prevState.feedbackModal,
      };
    });
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
          feedbackModal={this.state.feedbackModal}
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
          <String
            bold
            text={this.props.reviewName || 'Review'}
            fontSize={14}
            style={{marginBottom: 10}}
          />
          <String
            fontSize={12}
            text={'Booked Review'}
            style={{marginBottom: 10}}
          />
          <Dash
            style={{width: '100%', height: 2, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          <Button
            style={{marginBottom: 10}}
            fontSize={12}
            text={'Submit Feedback'}
            type="confirm"
            width={204}
            height={34}
            onPress={this._toggleFeedbackModal}
          />
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
            <String text={'Batch #'} />
            <String
              text={
                (!!this.props.selectedAppointment &&
                  !!this.props.selectedAppointment.program &&
                  this.props.selectedAppointment.program.batchNumber) ||
                '1'
              }
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
            text={'Address:'}
            style={{marginBottom: 10, alignSelf: 'flex-start'}}
          />
          <String
            text={this.state.address.address}
            style={{marginBottom: 10}}
          />
          <MapView
            initialRegion={{
              latitude: this.state.address.latitude,
              longitude: this.state.address.longitude,
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
                latitude: this.state.address.latitude,
                longitude: this.state.address.longitude,
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
            text={'Review Schedule'}
            style={{marginBottom: 10, alignSelf: 'flex-start'}}
          />
          <View
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            {!!this.state.selectedAppointment &&
              !!this.state.selectedAppointment.program &&
              !!this.state.selectedAppointment.program.schedule.length &&
              this.state.selectedAppointment.program.schedule.map(
                (schedule, key) => {
                  let schedObject = programSchedule(schedule);
                  let date = schedObject.date.toString().split(' ');
                  let morning, afternoon;
                  if (!!parseInt(schedObject.morningDuration)) {
                    let hours = parseInt(schedObject.morningTime) / 1;
                    let minutes = Math.floor(
                      (schedObject.morningTime % 1) * 60,
                    );
                    morning = `${hours}:${
                      minutes < 10 ? '0' + minutes : minutes
                    } am`;
                  }
                  if (!!parseInt(schedObject.afternoonDuration)) {
                    let hours = parseInt(schedObject.afternoonTime) / 1;
                    let minutes = Math.floor(
                      (schedObject.afternoonTime % 1) * 60,
                    );
                    afternoon = `${hours}:${
                      minutes < 10 ? '0' + minutes : minutes
                    } p.m.`;
                  }
                  let dateString = `${date[1]} ${date[2]},${date[3]}(${
                    date[0]
                  })`;
                  let scheduleString = `${morning}(${
                    schedObject.morningDuration
                  } hr/s) ${
                    !!parseInt(schedObject.afternoonDuration)
                      ? `- ${afternoon}(${schedObject.afternoonDuration} hr/s)`
                      : ''
                  }`;
                  return (
                    <ScheduledBooking
                      key={key}
                      dateString={dateString}
                      scheduleString={scheduleString}
                    />
                  );
                },
              )}
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
  };
};

// export default BookedTutorial;
export default connect(mapStateToProps, {
  getSelectedAppointment,
})(BookedTutorial);
