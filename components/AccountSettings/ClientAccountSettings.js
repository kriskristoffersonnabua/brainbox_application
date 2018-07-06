import React, {Component} from 'react';
import {AccountType} from '../../lib/constants';
import {String, Subjects, LocalImage, Button} from '../reusables';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import Actions from '../../actions';
const {
  getUserInformation,
  goToAccountSettingsEdit,
  goToUserDashboard,
} = Actions;

class ClientAccountSettings extends Component {
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
      accountType: 0,
      accountTypeString: 'Client',
      isMale: false,
    };
  }
  componentWillMount() {
    this.props.getUserInformation();
  }
  componentWillReceiveProps(nextProps) {
    const {user} = nextProps;
    if (user) {
      let birthday;
      let birthdayString;
      if (user.birthday) {
        birthday = new Date(user.birthday);
        data = birthday.toString().split(' ');
        birthdayString = `${data[1]} ${data[2]}, ${data[3]}`;
      }
      this.setState({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        address: user.address,
        contact: user.contact,
        birthday: (user.birthday && birthday) || null,
        birthdayString: (user.birthday && birthdayString) || '',
      });
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.goToUserDashboard}
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
              marginTop: 10,
              marginBottom: 10,
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
            text={this.state.isMale ? 'Male' : 'Female'}
            fontSize={12}
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
          <Button
            text={'Edit'}
            onPress={this.props.goToAccountSettingsEdit}
            style={{
              marginTop: 20,
              marginBottom: 10,
              alignSelf: 'center',
            }}
          />
        </View>
      </ScrollView>
    );
  }
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
    user: state.ResourcesReducer && state.ResourcesReducer.user,
  };
};

export default connect(mapStateToProps, {
  getUserInformation,
  goToAccountSettingsEdit,
  goToUserDashboard,
})(ClientAccountSettings);
