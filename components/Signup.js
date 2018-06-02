import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  TextInput,
  Keyboard,
  DatePickerAndroid,
} from 'react-native';
import {Button, TextField} from './reusables';
import {AccountType} from '../lib/constants';
import * as _ from 'lodash';
import Config from 'react-native-config';

import {connect} from 'react-redux';
import Actions from '../actions';
const {goToLoginPage, signupUserAction} = Actions;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountType: AccountType.Client,
      accountMessage: "I'm a Client/Tutee.",
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      contact: '',
      month: 0,
      day: 1,
      year: 1993,
      birthday: new Date(),
      birthdayToString: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState(...nextProps);
  }
  render() {
    return (
      <View style={styles.signupContainer}>
        <Image
          style={{
            marginBottom: 10,
          }}
          source={require('../assets/images/BrainboxTitle.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            marginTop: 10,
            marginBottom: 10,
            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'flex-start',
              alignSelf: 'flex-end',
              marginRight: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
              }}>{`"${this.state.accountMessage}"`}</Text>
            <TouchableOpacity onPress={this.changeAccountType}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#E66464',
                }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../assets/images/avatars/signupavatar.png')}
          />
        </View>
        <TextField
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
          keyboardType="email-address"
        />
        <TextField
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          secure
        />
        <TextField
          placeholder="Firstname"
          onChangeText={firstname => this.setState({firstname})}
          value={this.state.firstname}
        />
        <TextField
          placeholder="Lastname"
          onChangeText={lastname => this.setState({lastname})}
          value={this.state.lastname}
        />
        <TextField
          placeholder="Contact/Mobile Number"
          onChangeText={contact => this.setState({contact})}
          value={this.state.contact}
        />
        <TextField
          placeholder="Birthday"
          onFocus={async evt => {
            Keyboard.dismiss();
            const {action, year, month, day} = await DatePickerAndroid.open({
              date: new Date(),
            });
            if (action != DatePickerAndroid.dismissedAction) {
              const newDate = new Date(year, month, day);
              this.setState({
                birthday: newDate.toISOString(),
                birthdayToString: `${newDate.getMonth()}-${newDate.getDate()}-${newDate.getFullYear()}`,
              });
            }
          }}
          value={this.state.birthdayToString}
        />
        <Text
          style={{
            width: '80%',
            alignSelf: 'center',
            textAlign: 'center',
            marginBottom: 10,
          }}>
          By signing up, you agree to the terms and condition of brainbox
        </Text>
        <Button type="confirm" text="Signup" onPress={this.submitData} />
        <TouchableOpacity onPress={this.props.goToLoginPage}>
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              marginBottom: 10,
              marginTop: 10,
            }}>
            Tap here to go to login page.
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  changeAccountType = event => {
    switch (this.state.accountType) {
      case AccountType.Client:
        this.setState({
          accountType: AccountType.Tutor,
          accountMessage: "I'm a Tutor.",
        });
        break;
      case AccountType.Tutor:
        this.setState({
          accountType: AccountType.Client,
          accountMessage: "I'm a Client/Tutee.",
        });
    }
  };
  submitData = event => {
    let data = this.state;
    data = _.omit(data, [
      'month',
      'day',
      'year',
      'accountMessage',
      'birthdayToString',
    ]);
    //verify data
    //sanitize data
    //submit data wait for auth token
    console.log(data);
    try {
      this.props.signupUserAction(data);
    } catch (exception) {
      console.log(exception);
    }
  };
}

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(null, {goToLoginPage, signupUserAction})(Signup);
