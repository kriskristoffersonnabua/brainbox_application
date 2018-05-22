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
  Text
} from 'react-native';
import {windowDimensions} from '../../../../lib/device';
import {
  LocalImage,
  String,
  TextField,
  RadioButton,
  Button,
  Subjects
} from '../../../reusables';
import Dash from 'react-native-dash';
import MapView from 'react-native-maps';
import Scheduler from './Scheduler';

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
        source={props.add ? require('../../../../assets/images/icons/plusIcon.png'): require('../../../../assets/images/icons/minusIcon.png')}
        originalWidth={17}
        originalHeight={17}
        style={{
          position: 'absolute',
          left: 10,
        }}
      />
      <String text={`${props.tutee.firstname} ${props.tutee.lastname}`} fontSize={11} />
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
      ottHours: null,

      // one week tutorial states
      owtStartDate: null,
      owtStartDateString: '',
      owtEndDate: null,
      owtEndDateString: '',

      // one month tutorial states
      omtDate: null,
      omtDateString: '',

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
      tutees: [],
      existingTutees: [{
        firstname: 'Kris Kristofferson',
        lastname: 'Nabua',
        school: 'Sto. Nino Sped Center'
      }]
    };
  }
  render() {
    console.log(this.state);
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
            visible={this.state.existingTuteeModalVisible}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(43,43,43,0.24)'
              }}
            >
              <View 
                style={{
                width: '90%',
                backgroundColor: '#fafafa',
                justifyContent: 'center',
                borderRadius: 5,
                padding: 10
                }}>
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
              </View>
            </View>
          </Modal>
          <Modal 
            transparent={true}
            visible={this.state.newTuteeModalVisible}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(43,43,43,0.24)'
              }}
            >
              <View 
                style={{
                width: '90%',
                backgroundColor: '#fafafa',
                justifyContent: 'center',
                borderRadius: 5,
                padding: 10
              }}>
              <TextField 
                onChangeText={(value)=>{
                  this.setState({newTuteeFirstname: value});
                }}
                placeholder="Firstname" 
                style={{ width: '100%' }}/>
              <TextField 
                onChangeText={(value)=>{
                  this.setState({newTuteeLastname: value});
                }}
                placeholder="Lastname" 
                style={{ width: '100%' }}/>
              <TextField 
                datepicker
                focusCallback={({newDate, newDateString})=>{
                  this.setState({
                    newTuteeBirthday: newDate,
                    newTuteeBirthdayString: newDateString
                  })
                }}
                value={this.state.newTuteeBirthdayString}
                placeholder="Birthday" 
                style={{ width: '100%' }}/>
              <TextField 
                onChangeText={(value)=>{
                  this.setState({newTuteeSchool: value});
                }}
                placeholder="School" 
                style={{ width: '100%' }}/>
              <View style={{
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 10
              }}>
                <Button
                  width={80}
                  type="confirm"
                  text={'Add Tutee'}
                  fontSize={12}
                  style={{
                    marginRight: 10
                  }}
                  onPress={this._addNewTutee}
                />
                <Button
                  width={55}
                  type="cancel"
                  text={'Cancel'}
                  fontSize={12}
                  onPress={()=>(this.setState({newTuteeModalVisible: !this.state.newTuteeModalVisible}))}
                />
              </View>
              </View>
            </View>
          </Modal>
          <AddButtonIcon text={'Add Existing Tutee'} onPress={()=>(this.setState({existingTuteeModalVisible: true}))} />
          <AddButtonIcon text={'Add New Tutee'} onPress={()=>(this.setState({newTuteeModalVisible: true}))} />
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
            onPress={() => this.setState({centerBased: true})}
          />
          <RadioButton
            style={{marginLeft: 10, marginBottom: 10}}
            active={!this.state.centerBased}
            text={'home-based Tutorial'}
            onPress={() => this.setState({centerBased: false})}
          />
          <TextField
            placeholder={'Address'}
            onChangeText={() => {}}
            style={{
              width: '100%',
              marginBottom: 10,
            }}
          />
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
            minZoomLevel={14}
            maxZoomLevel={20}
            zoomControlEnabled={true}
            onPoiClick={this._mapPressed}
          />
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
          <Subjects allSubjects={subjects => this.setState({subjects})}/>
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
            text={'One-Time Tutorial'}
            onPress={() => {
              this.setState({ott: true, owt: false, omt: false});
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
              datepicker
              focusCallback={({ newDate: date, newDateString: dateString }) => {
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
                flex: 1,
              }}
              timepicker
              focusCallback={({ newTime: time, newTimeString: timeString }) =>
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
                  ottHours: value,
                  ott: true,
                  owt: false,
                  omt: false,
                });
              }}
              style={{
                flex: 1,
              }}
            />
          </View>
          <RadioButton
            style={{marginLeft: 10, marginBottom: 10}}
            active={this.state.owt}
            text={'One Week Tutorial'}
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
              focusCallback={({newDate,newDateString})=>this.setState({
                owtStartDate: newDate,
                owtStartDateString: newDateString,
                ott: false, owt: true, omt: false
              })}
              style={{
                flex: 1,
              }}
              value={this.state.owtStartDateString}
            />
            <TextField
              placeholder={'End Date'}
              datepicker
              focusCallback={({newDate,newDateString})=>this.setState({
                owtEndDate: newDate,
                owtEndDateString: newDateString,
                ott: false, owt: true, omt: false
              })}
              style={{
                flex: 1,
              }}
              value={this.state.owtEndDateString}
            />
          </View>
          <Scheduler onScheduleChange={(schedule) =>this.setState({owtSchedule: schedule, ott: false, owt: true, omt: false })}/>
          <RadioButton
            style={{marginLeft: 10, marginBottom: 10}}
            active={this.state.omt}
            text={'One Month Tutorial'}
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
              focusCallback={({newDate,newDateString})=>this.setState({
                omtStartDate: newDate,
                omtStartDateString: newDateString,
                ott: false, owt: false, omt: true
              })}
              style={{
                flex: 1,
              }}
              value={this.state.omtStartDateString}
            />
            <TextField
              placeholder={'End Date'}
              datepicker
              focusCallback={({newDate,newDateString})=>this.setState({
                omtEndDate: newDate,
                omtEndDateString: newDateString,
                ott: false, owt: false, omt: true
              })}
              style={{
                flex: 1,
              }}
              value={this.state.omtEndDateString}
            />
          </View>
          <Scheduler onScheduleChange={(schedule) =>this.setState({omtSchedule: schedule, ott: false, owt: false, omt: true })}/>
          <View style={styles.cta}>
            <Button
              style={{marginLeft: 10}}
              width={55}
              type="cancel"
              text={'Cancel'}
              fontSize={12}
            />
            <Button
              style={{marginLeft: 10}}
              width={55}
              type="confirm"
              text={'Book'}
              fontSize={12}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
  _mapPressed = data => {
    console.log(data);
  };
  _addExistingTutee = index => {
    let { tutees, existingTutees } = this.state;
    tutees.push(existingTutees[index]);
    this.setState({tutees, existingTuteeModalVisible: false});
  }
  _addNewTutee = () => {
    let { tutees, newTuteeFirstname, newTuteeLastname, newTuteeBirthday, newTuteeSchool } = this.state;
    tutees.push({
      firstname: newTuteeFirstname,
      lastname: newTuteeLastname,
      birthday: newTuteeBirthday,
      school: newTuteeSchool
    })
    this.setState({tutees, newTuteeModalVisible: false});
  }
  _popTutee = index => {
    let tutees = this.state.tutees;
    tutees.pop(index);
    this.setState({tutees});
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

export default TutorialBooking;
