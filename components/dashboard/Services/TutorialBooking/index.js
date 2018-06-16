import React, {Component} from 'react';
import {
  Alert,
  DatePickerAndroid,
  Keyboard,
  Modal,
  Picker,
  ScrollView,
  StyleSheet,
  TimePickerAndroid,
  TouchableOpacity,
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import {windowDimensions} from '../../../../lib/device';
import {
  LocalImage,
  String,
  TextField,
  RadioButton,
  Button,
  Subjects,
} from '../../../reusables';
import Dash from 'react-native-dash';
import MapView, {Marker} from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import Scheduler from './Scheduler';
import {getDates, generateBookedSchedules, generateLPR} from './controller';
import Actions from '../../../../actions';
const {createAppointmentAction} = Actions;
import {connect} from 'react-redux';

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
        borderColor: '#979797',
        borderRadius: 5,
        marginBottom: 10,
      }}>
      <LocalImage
        source={
          props.add
            ? require('../../../../assets/images/icons/plusIcon.png')
            : require('../../../../assets/images/icons/minusIcon.png')
        }
        originalWidth={17}
        originalHeight={17}
        style={{
          position: 'absolute',
          left: 10,
        }}
      />
      <String
        text={`${props.tutee.firstname} ${props.tutee.lastname}`}
        fontSize={11}
      />
    </TouchableOpacity>
  );
};

const CustomSchedule = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          padding: 10,
          borderWidth: 1,
          borderColor: '#979797',
          borderRadius: 5,
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <String text={props.schedule.ottDateString} />
        <String text={props.schedule.ottTimeString} />
        <String text={props.schedule.ottHours + ' hour/s.'} />
      </View>
    </TouchableOpacity>
  );
};

const AddButtonIcon = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 156,
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
      }}>
      <LocalImage
        source={require('../../../../assets/images/icons/plusIcon.png')}
        originalWidth={17}
        originalHeight={17}
        style={{marginRight: 15}}
      />
      <String text={props.text} fontSize={11} style={{textAlign: 'left'}} />
    </TouchableOpacity>
  );
};

class TutorialBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerBased: true,
      location: 'somewhere',
      ott: false,
      owt: false,
      omt: false,

      // one time tutorial states
      ottDate: null,
      ottDateString: '',
      ottTime: null,
      ottTimeString: '',
      ottHours: '',

      // one week tutorial states
      owtStartDate: null,
      owtStartDateString: '',
      owtEndDate: null,
      owtEndDateString: '',
      owtSchedule: null,

      // one month tutorial states
      omtStartDate: null,
      omtStartDateString: '',
      omtEndDate: null,
      omtEndDateString: '',
      omtSchedule: null,

      //add new tutee modal
      newTuteeModalVisible: false,
      newTuteeFirstname: '',
      newTuteeLastname: '',
      newTuteeBirthday: null,
      newTuteeBirthdayString: '',
      newTuteeSchool: '',

      //add existine tutee modal
      existingTuteeModalVisible: false,

      //tutees
      existingTutees: [
        {
          firstname: 'Kris Kristofferson',
          lastname: 'Nabua',
          school: 'Sto. Nino Sped Center',
        },
      ],

      //data
      tutees: [],
      customDates: [],
      tutorId: props.tutorId,
      //default address if user is choosing center based
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
  addCustomDate = () => {
    const {
      ottDate,
      ottDateString,
      ottTime,
      ottTimeString,
      ottHours,
      customDates,
    } = this.state;
    customDates.push({
      ottDate,
      ottDateString,
      ottTime,
      ottTimeString,
      ottHours,
    });
    this.setState({
      customDates,
      ottDate: null,
      ottDateString: '',
      ottTime: null,
      ottTimeString: '',
      ottHours: null,
    });
  };
  popCustomDate = index => {
    const {customDates} = this.state;
    customDates.splice(index, 1);
    this.setState({customDates});
  };
  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal({
      latitude: 11.241568,
      longitude: 125.001022,
      radius: 0.2,
    })
      .then(place => {
        this.setState(
          {
            address: place,
          },
          () => {
            const {latitude, longitude} = place;
            this.refs.maps.animateToCoordinate({latitude, longitude}, 10);
          },
        );
      })
      .catch(error => console.log(error.message));
  }
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'blue'}}>
        <View style={styles.container}>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity style={styles.backButton}>
              <LocalImage
                source={require('../../../../assets/images/icons/backButton.png')}
                resize
                newWidth={15}
                newHeight={15}
              />
              <String text={'BACK'} fontSize={11} />
            </TouchableOpacity>
          </View>
          <String
            bold
            text={'Tutorial Booking'}
            fontSize={11}
            style={{padding: 10}}
          />
          <Dash
            style={{width: windowDimensions.width, height: 2, marginBottom: 10}}
            dashLength={5}
            dashGap={5}
            dashColor={'#979797'}
          />
          <String
            bold
            text={'TUTEE/S:'}
            fontSize={11}
            style={{alignSelf: 'flex-start', marginBottom: 10}}
          />
          {this.state.tutees.map((tutee, index) => {
            return (
              <Tutee
                onPress={e => this._popTutee(index)}
                key={index}
                index={index}
                tutee={tutee}
              />
            );
          })}
          <Modal
            transparent={true}
            onRequestClose={() =>
              this.setState({existingTuteeModalVisible: false})
            }
            visible={this.state.existingTuteeModalVisible}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(43,43,43,0.24)',
              }}>
              <View
                style={{
                  width: '90%',
                  backgroundColor: '#fafafa',
                  justifyContent: 'center',
                  borderRadius: 5,
                  padding: 10,
                }}>
                <String
                  text={'Tap on a tutee below:'}
                  style={{marginBottom: 10}}
                />
                {this.state.existingTutees.map((tutee, index) => {
                  return (
                    <Tutee
                      add
                      onPress={e => this._addExistingTutee(index)}
                      key={index}
                      index={index}
                      tutee={tutee}
                    />
                  );
                })}
                <Button
                  width={55}
                  type="cancel"
                  text={'Cancel'}
                  fontSize={12}
                  style={{
                    alignSelf: 'flex-start',
                    height: 30,
                  }}
                  onPress={() =>
                    this.setState({
                      existingTuteeModalVisible: !this.state
                        .existingTuteeModalVisible,
                    })
                  }
                />
              </View>
            </View>
          </Modal>
          <Modal
            onRequestClose={() => {
              this.setState({newTuteeModalVisible: false});
            }}
            transparent={true}
            visible={this.state.newTuteeModalVisible}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(43,43,43,0.24)',
              }}>
              <View
                style={{
                  width: '90%',
                  backgroundColor: '#fafafa',
                  justifyContent: 'center',
                  borderRadius: 5,
                  padding: 10,
                }}>
                <TextField
                  onChangeText={value => {
                    this.setState({newTuteeFirstname: value});
                  }}
                  placeholder="Firstname"
                  style={{width: '100%'}}
                />
                <TextField
                  onChangeText={value => {
                    this.setState({newTuteeLastname: value});
                  }}
                  placeholder="Lastname"
                  style={{width: '100%'}}
                />
                <TextField
                  datepicker
                  focusCallback={({newDate, newDateString}) => {
                    this.setState({
                      newTuteeBirthday: newDate,
                      newTuteeBirthdayString: newDateString,
                    });
                  }}
                  value={this.state.newTuteeBirthdayString}
                  placeholder="Birthday"
                  style={{width: '100%'}}
                />
                <TextField
                  onChangeText={value => {
                    this.setState({newTuteeSchool: value});
                  }}
                  placeholder="School"
                  style={{width: '100%'}}
                />
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Button
                    width={80}
                    type="confirm"
                    text={'Add Tutee'}
                    fontSize={12}
                    style={{
                      marginRight: 10,
                    }}
                    onPress={this._addNewTutee}
                  />
                  <Button
                    width={55}
                    type="cancel"
                    text={'Cancel'}
                    fontSize={12}
                    onPress={() =>
                      this.setState({
                        newTuteeModalVisible: !this.state.newTuteeModalVisible,
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </Modal>
          <AddButtonIcon
            text={'Add Existing Tutee'}
            onPress={() => this.setState({existingTuteeModalVisible: true})}
          />
          <AddButtonIcon
            text={'Add New Tutee'}
            onPress={() => this.setState({newTuteeModalVisible: true})}
          />
          <Dash
            style={{
              width: windowDimensions.width,
              height: 2,
              marginBottom: 10,
              marginTop: 10,
            }}
            dashLength={5}
            dashGap={5}
            dashColor={'#979797'}
          />
          <String
            bold
            text={'LOCATION:'}
            fontSize={11}
            style={{alignSelf: 'flex-start', marginBottom: 10}}
          />
          <RadioButton
            style={{marginLeft: 10, marginBottom: 10}}
            active={this.state.centerBased}
            text={'Center-based Tutorial'}
            onPress={() =>
              this.setState({
                centerBased: true,
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
              })
            }
          />
          <RadioButton
            style={{marginLeft: 10, marginBottom: 10}}
            active={!this.state.centerBased}
            text={'home-based Tutorial'}
            onPress={() => this.setState({centerBased: false})}
          />
          {!this.state.centerBased && [
            <TextField
              placeholder={'Address'}
              onChangeText={() => {}}
              style={{
                width: '100%',
                marginBottom: 10,
              }}
              onFocus={evt => {
                Keyboard.dismiss();
                this.openSearchModal();
              }}
              value={(this.state.address && this.state.address.address) || ''}
            />,
            <MapView
              initialRegion={{
                latitude: 11.249999,
                longitude: 125.0,
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
              {this.state.address && (
                <Marker
                  coordinate={{
                    latitude: this.state.address.latitude,
                    longitude: this.state.address.longitude,
                  }}
                />
              )}
            </MapView>,
          ]}
          <Dash
            style={{width: windowDimensions.width, height: 2, marginBottom: 10}}
            dashLength={5}
            dashGap={5}
            dashColor={'#979797'}
          />
          <String
            bold
            text={'SUBJECT/S:'}
            fontSize={11}
            style={{alignSelf: 'flex-start', marginBottom: 5}}
          />
          <Subjects allSubjects={subjects => this.setState({subjects})} />
          <Dash
            style={{width: windowDimensions.width, height: 2, marginBottom: 10}}
            dashLength={5}
            dashGap={5}
            dashColor={'#979797'}
          />
          <String
            bold
            text={'SCHEDULE:'}
            fontSize={11}
            style={{alignSelf: 'flex-start', marginBottom: 10}}
          />
          <RadioButton
            style={{marginLeft: 10, marginBottom: 10}}
            active={this.state.ott}
            text={'Custom Schedule Tutorial'}
            onPress={() => {
              this.setState({ott: true, owt: false, omt: false});
            }}
          />
          <View
            style={{
              width: '100%',
              marginBottom: 10,
              paddingLeft: 30,
            }}>
            {this.state.customDates.map((schedule, index) => {
              return (
                <CustomSchedule
                  onPress={() => this.popCustomDate(index)}
                  key={index}
                  schedule={schedule}
                />
              );
            })}
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <TextField
                datepicker
                focusCallback={({newDate: date, newDateString: dateString}) => {
                  this.setState({
                    ottDate: date,
                    ottDateString: dateString,
                    ott: true,
                    owt: false,
                    omt: false,
                  });
                }}
                placeholder={'Date'}
                value={this.state.ottDateString}
                style={{
                  flex: 3,
                }}
              />
              <TextField
                placeholder={'Time'}
                style={{
                  flex: 2,
                }}
                timepicker
                focusCallback={({newTime: time, newTimeString: timeString}) =>
                  this.setState({
                    ottTime: time,
                    ottTimeString: timeString,
                    ott: true,
                    owt: false,
                    omt: false,
                  })
                }
                value={this.state.ottTimeString}
              />
              <TextField
                placeholder={'Hours'}
                keyboardType="numeric"
                onChangeText={value => {
                  this.setState({
                    ottHours: parseInt(value, 10),
                    ott: true,
                    owt: false,
                    omt: false,
                  });
                }}
                style={{
                  flex: 1,
                }}
                value={this.state.ottHours + ''}
              />
              <Button
                onPress={this.addCustomDate}
                width={90}
                height={35}
                fontSize={12}
                style={{padding: 5, alignSelf: 'flex-end'}}
                type="confirm"
                text={'Add Schedule'}
              />
            </View>
          </View>
          <RadioButton
            style={{marginLeft: 10, marginBottom: 10}}
            active={this.state.owt}
            text={'Weekly Tutorial'}
            onPress={() => {
              this.setState({ott: false, owt: true, omt: false});
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginBottom: 10,
              paddingLeft: 30,
            }}>
            <TextField
              placeholder={'Start Date'}
              datepicker
              focusCallback={({newDate, newDateString}) =>
                this.setState({
                  owtStartDate: newDate,
                  owtStartDateString: newDateString,
                  ott: false,
                  owt: true,
                  omt: false,
                })
              }
              style={{
                flex: 1,
              }}
              value={this.state.owtStartDateString}
            />
            <TextField
              placeholder={'End Date'}
              datepicker
              focusCallback={({newDate, newDateString}) =>
                this.setState({
                  owtEndDate: newDate,
                  owtEndDateString: newDateString,
                  ott: false,
                  owt: true,
                  omt: false,
                })
              }
              style={{
                flex: 1,
              }}
              value={this.state.owtEndDateString}
            />
          </View>
          <Scheduler
            onScheduleChange={schedule =>
              this.setState({
                owtSchedule: schedule,
                ott: false,
                owt: true,
                omt: false,
              })
            }
          />
          <RadioButton
            style={{marginLeft: 10, marginBottom: 10}}
            active={this.state.omt}
            text={'Monthly Tutorial'}
            onPress={() => {
              this.setState({ott: false, owt: false, omt: true});
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginBottom: 10,
              paddingLeft: 30,
            }}>
            <TextField
              placeholder={'Start Date'}
              datepicker
              focusCallback={({newDate, newDateString}) =>
                this.setState({
                  omtStartDate: newDate,
                  omtStartDateString: newDateString,
                  ott: false,
                  owt: false,
                  omt: true,
                })
              }
              style={{
                flex: 1,
              }}
              value={this.state.omtStartDateString}
            />
            <TextField
              placeholder={'End Date'}
              datepicker
              focusCallback={({newDate, newDateString}) =>
                this.setState({
                  omtEndDate: newDate,
                  omtEndDateString: newDateString,
                  ott: false,
                  owt: false,
                  omt: true,
                })
              }
              style={{
                flex: 1,
              }}
              value={this.state.omtEndDateString}
            />
          </View>
          <Scheduler
            onScheduleChange={schedule =>
              this.setState({
                omtSchedule: schedule,
                ott: false,
                owt: false,
                omt: true,
              })
            }
          />
          <View style={styles.cta}>
            <Button
              style={{marginLeft: 10, height: 30}}
              width={55}
              type="cancel"
              text={'Cancel'}
              fontSize={12}
            />
            <Button
              style={{marginLeft: 10, height: 30}}
              width={55}
              type="confirm"
              text={'Book'}
              fontSize={12}
              onPress={this.submitData}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
  _addExistingTutee = index => {
    let {tutees, existingTutees} = this.state;
    tutees.push(existingTutees[index]);
    this.setState({tutees, existingTuteeModalVisible: false});
  };
  _addNewTutee = () => {
    let {
      tutees,
      newTuteeFirstname,
      newTuteeLastname,
      newTuteeBirthday,
      newTuteeSchool,
    } = this.state;
    tutees.push({
      firstname: newTuteeFirstname,
      lastname: newTuteeLastname,
      birthday: newTuteeBirthday,
      school: newTuteeSchool,
    });
    this.setState({tutees, newTuteeModalVisible: false});
  };
  _popTutee = index => {
    let tutees = this.state.tutees;
    tutees.pop(index);
    this.setState({tutees});
  };
  submitData = () => {
    if (!(this.state.tutees.length > 0)) {
      Alert.alert('Please add a tutee.');
      return;
    }
    if (!this.state.ott && !this.state.owt && !this.state.omt) {
      Alert.alert('Please select schedule.');
      return;
    }
    if (this.state.ott) {
      if (!(this.state.customDates.length > 0)) {
        Alert.alert(
          'You have chosen custom dates. Please input dates to be booked',
        );
        return;
      }
      //generate booked schedules
      let bookedSchedules = generateBookedSchedules(
        'custom',
        this.state.customDates,
      );
      //generate lpr for this appointment
      let generatedLPR = generateLPR('custom', this.state.customDates);
      //TODO: change tutorId to dynamic tutorID
      let appointmentData = {
        tutees: this.state.tutees,
        tutorId: '5b10f31621d211577ba1aaaa',
        address: this.state.address,
        subjects: this.state.subjects,
        schedule: this.state.customDates,
      };

      try {
        this.props.createAppointmentAction(
          appointmentData,
          bookedSchedules,
          generatedLPR,
          '5b10f31621d211577ba1aaaa',
        );
      } catch (exception) {
        console.log(exception);
      }
    }
    if (this.state.owt) {
      if (this.state.owtStartDate == null) {
        Alert.alert('Please input start date of weekly tutorial.');
        return;
      }
      if (this.state.owtEndDate == null) {
        Alert.alert('Please input end date of weekly tutorial.');
        return;
      }
      if (this.state.owtSchedule == null) {
        Alert.alert('Please specify the weekly schedule tutorial.');
        return;
      }
      //generate booked schedules
      let bookedSchedules = generateBookedSchedules(
        'weekly',
        this.state.customDates,
      );
      //generate lpr for this appointment
      let generatedLPR = generateLPR('weekly', this.state.customDates);
      //TODO: change tutorId to dynamic tutorID
      console.log(bookedSchedules);
      console.log(generatedLPR);
    }
    if (this.state.omt) {
      if (this.state.omtStartDate == null) {
        Alert.alert('Please input start date of monthly tutorial.');
        return;
      }
      if (this.state.omtEndDate == null) {
        Alert.alert('Please input end date of monthly tutorial.');
        return;
      }
      if (this.state.omtSchedule == null) {
        Alert.alert('Please specify the weekly schedule tutorial.');
        return;
      }
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
  },
  backButtonContainer: {
    width: windowDimensions.width,
    height: 25,
    padding: 5,
  },
  backButton: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cta: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

// export default TutorialBooking;
export default connect(null, {
  createAppointmentAction,
})(TutorialBooking);
