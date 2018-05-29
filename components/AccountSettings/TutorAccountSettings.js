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
const {
  getUserInformation,
  goToAccountSettingsEdit,
  goToUserDashboard,
  getTutorInformation,
  getTutor,
} = Actions;

class TutorAccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      sex: '',
      email: '',
      contact: '',
      address: '',
      birthdayString: '',
      accountType: 1,
      accountTypeString: 'Tutor',
      isMale: false,
    };
  }
  componentWillMount() {
    if (this.props.tutorId) {
      this.props.getTutor(this.props.tutorId);
    } else {
      this.props.getUserInformation();
    }
  }
  componentWillReceiveProps(nextProps) {
    const {user} = nextProps;
    if (user) {
      let newSchedule = {};
      if (user.user.schedule) {
        newSchedule.a = user.user.schedule[0];
        newSchedule.b = user.user.schedule[1];
        newSchedule.c = user.user.schedule[2];
        newSchedule.d = user.user.schedule[3];
        newSchedule.e = user.user.schedule[4];
        newSchedule.f = user.user.schedule[5];
        newSchedule.g = user.user.schedule[6];
        newSchedule.h = user.user.schedule[7];
        newSchedule.i = user.user.schedule[8];
        newSchedule.j = user.user.schedule[9];
        newSchedule.k = user.user.schedule[10];
        newSchedule.l = user.user.schedule[11];
        newSchedule.m = user.user.schedule[12];
        newSchedule.o = user.user.schedule[13];
        newSchedule.n = user.user.schedule[14];
      }
      let birthday;
      let birthdayString;
      if (user.user.birthday) {
        birthday = new Date(user.user.birthday);
        data = birthday.toString().split(' ');
        console.log(birthday, data);
        birthdayString = `${data[1]} ${data[2]}, ${data[3]}`;
      }
      this.setState({
        firstname: user.user.firstname,
        lastname: user.user.lastname,
        email: user.user.email,
        address: user.user.address,
        contact: user.user.contact,
        subjects: user.user.subjects,
        schedule: newSchedule,
        birthday: (user.user.birthday && birthday) || null,
        birthdayString: (user.user.birthday && birthdayString) || '',
      });
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.back || this.props.goToUserDashboard}
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
            <String
              text={`${this.state.firstname} ${this.state.lastname}`}
              fontSize={14}
            />
          </View>
          <String
            text={this.state.accountTypeString}
            fontSize={14}
            style={{
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <String
            text={this.state.sex}
            fontSize={14}
            style={{
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          {this.state.accountType == AccountType.Tutor
            ? [
                <String
                  text={'Subjects Handled:'}
                  style={{
                    width: '100%',
                    marginBottom: 10,
                  }}
                />,
                <Subjects
                  subjects={this.state.subjects}
                  allSubjects={() => {}}
                  style={{width: '100%', marginTop: 10, marginBottom: 10}}
                  readOnly={true}
                />,
              ]
            : null}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <String fontSize={14} text={'Contact:'} />
            <String fontSize={12} text={this.state.contact} />
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <String fontSize={14} text={'Address:'} />
            <String
              fontSize={12}
              style={{
                width: 230,
                textAlign: 'right',
              }}
              text={this.state.address}
            />
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <String fontSize={14} text={'Birthday:'} />
            <String
              fontSize={12}
              style={{
                width: 230,
                textAlign: 'right',
              }}
              text={this.state.birthdayString}
            />
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <String fontSize={14} text={'Email:'} />
            <String
              fontSize={12}
              style={{
                width: 230,
                textAlign: 'right',
                marginBottom: 40,
              }}
              text={this.state.email}
            />
          </View>
          <String
            text={'Tutor Available Schedule: '}
            fontSize={14}
            style={{
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}
          />
          <TutorSchedule
            readOnly
            schedule={this.state.schedule}
            allTutorSchedule={this._allSchedule}
          />
          {!this.props.tutorId ? (
            <Button
              text={'Edit'}
              style={{
                marginTop: 20,
                marginBottom: 10,
                alignSelf: 'center',
              }}
              onPress={this.props.goToAccountSettingsEdit}
            />
          ) : null}
        </View>
      </ScrollView>
    );
  }
  _allSchedule = schedule => {
    this.setState({tutorSchedule: schedule});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    user: state.getUserInformation.user || state.getTutor.user,
  };
};

export default connect(mapStateToProps, {
  getUserInformation,
  goToAccountSettingsEdit,
  goToUserDashboard,
  getTutorInformation,
  getTutor,
})(TutorAccountSettings);
