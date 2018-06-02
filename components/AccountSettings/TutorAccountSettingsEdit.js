import React, {Component} from 'react';
import {AccountType} from '../../lib/constants';
import {
  Header,
  String,
  TextField,
  Subjects,
  LocalImage,
  Button,
} from '../reusables';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import TutorSchedule from './TutorSchedule';
import {connect} from 'react-redux';
import Actions from '../../actions';
import {insertTutorSchedule, parseTutorSchedule} from '../../lib/converter';
const {getUserInformation, updateUserInfo, goToAccountSettings} = Actions;

class TutorAccountSettingsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      accountType: AccountType.Client,
      isMale: false,
    };
  }
  componentWillMount() {
    this.props.getUserInformation();
  }
  componentWillReceiveProps(nextProps) {
    const {user} = this.props;
    console.log(user);
    if (user) {
      let birthday;
      let birthdayString;
      if (user.user.birthday) {
        birthday = new Date(user.user.birthday);
        data = birthday.toString().split(' ');
        birthdayString = `${data[1]} ${data[2]}, ${data[3]}`;
      }
      const sched = user.user.schedule;
      let parsedSched = {
        a: sched[0],
        aSchedule: parseTutorSchedule(sched[0]),
        b: sched[1],
        bSchedule: parseTutorSchedule(sched[1]),
        c: sched[2],
        cSchedule: parseTutorSchedule(sched[2]),
        e: sched[3],
        eSchedule: parseTutorSchedule(sched[3]),
        d: sched[4],
        dSchedule: parseTutorSchedule(sched[4]),
        f: sched[5],
        fSchedule: parseTutorSchedule(sched[5]),
        g: sched[6],
        gSchedule: parseTutorSchedule(sched[6]),
        h: sched[7],
        hSchedule: parseTutorSchedule(sched[7]),
        i: sched[8],
        iSchedule: parseTutorSchedule(sched[8]),
        j: sched[9],
        jSchedule: parseTutorSchedule(sched[9]),
        k: sched[10],
        kSchedule: parseTutorSchedule(sched[10]),
        l: sched[11],
        lSchedule: parseTutorSchedule(sched[11]),
        m: sched[12],
        mSchedule: parseTutorSchedule(sched[12]),
        n: sched[13],
        nSchedule: parseTutorSchedule(sched[13]),
        o: sched[14],
        oSchedule: parseTutorSchedule(sched[14]),
      };
      this.setState({
        firstname: user.user.firstname,
        lastname: user.user.lastname,
        email: user.user.email,
        address: user.user.address,
        contact: user.user.contact,
        subjects: user.user.subjects,
        newTutorSchedule: parsedSched,
        birthday: (user.user.birthday && birthday) || null,
        birthdayString: (user.user.birthday && birthdayString) || '',
      });
    }
  }
  render() {
    console.log('edit');
    console.log(this.state);
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.goToAccountSettings}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
            }}>
            <LocalImage
              source={require('../../assets/images/icons/backButton.png')}
              resize
              newWidth={15}
              newHeight={15}
              style={{
                marginRight: 10,
              }}
            />
            <Text>BACK</Text>
          </TouchableOpacity>
          <LocalImage
            source={require('../../assets/images/avatars/defaultTutorAvatar.png')}
            resize
            newWidth={150}
            newHeight={160}
            style={{
              marginRight: 10,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextField
              placeholder={'Firstname'}
              onChangeText={value => this.setState({firstname: value})}
              fontSize={10}
              style={{
                flex: 1,
                marginBottom: 10,
              }}
              value={this.state.firstname}
            />
            <TextField
              placeholder={'Lastname'}
              onChangeText={value => this.setState({lastname: value})}
              fontSize={10}
              style={{
                flex: 1,
                marginBottom: 10,
              }}
              value={this.state.lastname}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <String
              text={'Sex: '}
              fontSize={14}
              style={{
                marginRight: 10,
                marginBottom: 10,
              }}
            />
            <TouchableOpacity
              onPress={() => this.setState({isMale: false})}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
                width: 60,
                height: 20,
                backgroundColor: !this.state.isMale ? '#BDF287' : '#fff',
                borderRadius: 5,
              }}>
              <String text={'Female'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({isMale: true})}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                height: 20,
                backgroundColor: this.state.isMale ? '#BDF287' : '#fff',
                borderRadius: 5,
              }}>
              <String text={'Male'} />
            </TouchableOpacity>
          </View>
          <String
            fontSizE={14}
            bold
            text={'Subjects Handled:'}
            style={{
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}
          />
          <Subjects
            subjects={this.state.subjects}
            allSubjects={subjects => {
              this.state.subjects = subjects;
            }}
          />
          <TextField
            placeholder={'Email'}
            onChangeText={value => this.setState({email: value})}
            fontSize={10}
            style={{
              width: '100%',
              marginBottom: 10,
            }}
            value={this.state.email}
          />
          <TextField
            placeholder={'Birthday'}
            datepicker
            focusCallback={({newDate, newDateString}) =>
              this.setState({birthday: newDate, birthdayString: newDateString})
            }
            onChangeText={value => this.setState({birthday: value})}
            fontSize={10}
            style={{
              width: '100%',
              marginBottom: 10,
            }}
            value={this.state.birthdayString}
          />
          <TextField
            placeholder={'Address'}
            onChangeText={value => this.setState({address: value})}
            fontSize={10}
            style={{
              width: '100%',
              marginBottom: 10,
            }}
            value={this.state.address}
          />
          <TextField
            placeholder={'Contact'}
            onChangeText={value => this.setState({contact: value})}
            fontSize={10}
            style={{
              width: '100%',
              marginBottom: 10,
            }}
            value={this.state.contact + ''}
          />
          {this.state.accountType == AccountType.Tutor
            ? [
                <String
                  text={'Subjects:'}
                  style={{
                    width: '100%',
                    marginBottom: 10,
                  }}
                />,
                <Subjects
                  style={{width: '100%', marginTop: 10, marginBottom: 10}}
                />,
              ]
            : null}
          <String
            text={'Set your available schedule: '}
            fontSize={14}
            style={{
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}
          />
          <TutorSchedule
            schedule={this.state.newTutorSchedule}
            allTutorSchedule={this._allSchedule}
          />
          <Button
            text={'Save'}
            style={{
              marginTop: 20,
              marginBottom: 10,
              alignSelf: 'center',
            }}
            onPress={this.updateUser}
          />
        </View>
      </ScrollView>
    );
  }
  _allSchedule = schedule => {
    this.setState({newTutorSchedule: schedule});
  };
  updateUser = () => {
    //sanitize data
    let data = this.state;
    delete data['accountType'];
    data.gender = data.isMale ? 0 : 1;
    delete data['isMale'];
    delete data['birthdayString'];

    if (this.state.newTutorSchedule != undefined) {
      let newSchedule = [];
      Object.keys(this.state.newTutorSchedule).map(key => {
        newSchedule.push(this.state.newTutorSchedule[key]);
      });
      data['schedule'] = newSchedule;
      delete data['tutorSchedule'];
      delete data['newTutorSchedule'];
    }

    console.log(data);
    this.props.updateUserInfo(data);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
});

const mapStateToProps = state => {
  return {
    user: state.ResourcesReducer.user,
  };
};

export default connect(mapStateToProps, {
  getUserInformation,
  updateUserInfo,
  goToAccountSettings,
})(TutorAccountSettingsEdit);
