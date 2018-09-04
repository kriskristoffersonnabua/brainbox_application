import React from 'react';
import {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Config from 'react-native-config';
import Modal from 'react-native-modal';
import Dash from 'react-native-dash';
import {Button, TextField, String, RadioButton} from './reusables';
import {connect} from 'react-redux';
import Actions from '../actions';
import FBSDK from 'react-native-fbsdk';
import {verifyEmailExisting} from '../lib/api';
const {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} = FBSDK;
const {goToSignupPage, authenticateUser, authenticateFBUser} = Actions;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsVisible: false,
      isTutor: false,
      accountType: 0,
    };
  }

  loginWithFacebook = async () => {
    let response;
    try {
      LoginManager.setLoginBehavior('NATIVE_ONLY');
      response = await LoginManager.logInWithReadPermissions([
        'public_profile',
        'email',
      ]);
      if (!!response.grantedPermissions.length) {
        this.getFacebookInformation();
      }
    } catch (nativeError) {
      try {
        LoginManager.setLoginBehavior('WEB_ONLY');
        response = await LoginManager.logInWithReadPermissions([
          'public_profile',
          'email',
        ]);
        if (!!response.grantedPermissions.length) {
          this.getFacebookInformation();
        }
      } catch (webError) {
        console.error(webError);
      }
    }
  };

  getFacebookInformation = () => {
    const infoRequest = new GraphRequest(
      '/me?fields=email,first_name,last_name',
      null,
      async (error, result) => {
        if (!!result) {
          const {first_name, last_name, id, email} = result;
          const response = await verifyEmailExisting(email, id);
          if (response === 404) {
            this.setState({
              first_name,
              last_name,
              email,
              facebookId: id,
              modalIsVisible: true,
            });
          } else if (response === 200) {
            await this.props.authenticateFBUser({
              first_name: first_name,
              last_name: last_name,
              email: email,
              facebookId: id,
            });
          }
        } else if (!!error) {
          alert(error);
        }
      },
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  };

  authenticateFBUser = () => {
    const {first_name, last_name, email, facebookId, accountType} = this.state;
    this.props.authenticateFBUser({
      first_name,
      last_name,
      email,
      facebookId,
      accountType,
    });
  };

  closeModal = () => {
    this.setState({modalIsVisible: false});
    this.authenticateFBUser();
  };

  render() {
    const {modalIsVisible, isTutor} = this.state;
    return (
      <View style={styles.loginContainer}>
        <Modal isVisible={modalIsVisible}>
          <View style={styles.modal}>
            <String text={'Account Type'} fontSize={16} bold />
            <Dash
              style={{
                width: '100%',
                height: 2,
                marginTop: 10,
                marginBottom: 10,
              }}
              dashLength={5}
              dashGap={5}
              dashColor={'#979797'}
            />
            <String text={'I am a ...'} fontSize={14} />
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RadioButton
                style={{marginLeft: 10, marginBottom: 10}}
                active={isTutor}
                text={'Tutor'}
                onPress={() => this.setState({isTutor: true, accountType: 1})}
              />
              <RadioButton
                style={{marginLeft: 10, marginBottom: 10}}
                active={!isTutor}
                text={'Client'}
                onPress={() => this.setState({isTutor: false, accountType: 0})}
              />
            </View>
            <Button text={'Confirm'} type="confirm" onPress={this.closeModal} />
          </View>
        </Modal>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/BrainboxTitle.png')}
        />
        <TextField
          placeholder="Email"
          onChangeText={email => this.setState({email})}
        />
        <TextField
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          secure
        />
        <Button type="confirm" text="Login" onPress={this.login} />
        <Text style={styles.orStyle}>or</Text>
        <Button
          type="facebook"
          text="Facebook"
          onPress={this.loginWithFacebook}
        />
        <TouchableOpacity onPress={this.props.goToSignupPage}>
          <Text
            style={{
              fontSize: 10,
              marginTop: 10,
              marginBottom: 10,
            }}>
            {' '}
            Create Account{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  login = () => {
    let data = this.state;
    try {
      this.props.authenticateUser(data);
    } catch (exception) {
      console.log(exception);
    }
  };
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  orStyle: {
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageStyle: {
    marginTop: 20,
    marginBottom: 50,
  },
  textInputStyle: {
    width: 265,
    height: 40,
  },
  modal: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 10,
  },
});

export default connect(null, {
  goToSignupPage,
  authenticateUser,
  authenticateFBUser,
})(Login);
