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
const {getSelectedAppointment} = Actions;

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
      }}>
      <String text={'4-12-2018'} />
      <String text={'8:30'} />
      <String text={'4 hours'} />
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
      addressObject: {},
      subjects: ['College Algebra', 'Science and Health'],
      scheduledBookings: [],
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
    const {selectedAppointment} = nextProps;
    if (!!selectedAppointment && selectedAppointment !== null) {
      const {
        tutees,
        tutorId: {firstname, lastname},
        address,
        subjects,
        schedule,
      } = selectedAppointment;
      let addressString, addressObject;
      if (!!address) {
        addressObject = JSON.parse(address);
        console.log(addressObject);
      }
      this.setState({
        firstname,
        lastname,
        subjects,
        tutees,
        address: addressObject.address,
        addressObject,
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <ScrollView
        style={{
          width: '100%',
        }}>
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
          <Button
            style={{marginBottom: 10}}
            fontSize={12}
            text={'Learners Progress Report'}
            type="cancel"
            width={204}
            height={34}
          />
          <Button
            style={{marginBottom: 10}}
            fontSize={12}
            text={'Submit Feedback'}
            type="confirm"
            width={204}
            height={34}
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
            text={'Scheduled Bookings:'}
            style={{marginBottom: 10, alignSelf: 'flex-start'}}
          />
          <View
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <ScheduledBooking />
          </View>
        </View>
      </ScrollView>
    );
  }
}
// {this.state.address && (
//   <Marker
//   coordinate={{
//     latitude: this.state.addressObject.latitude,
//       longitude: this.state.addressObject.longitude,
//   }}
//   />
// )}
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
