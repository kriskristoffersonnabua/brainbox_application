import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import Button from './Button';
import TextField from './TextField';
import {connect} from 'react-redux';
import Actions from '../actions';
const {goToSignupPage, authenticateUser} = Actions;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.loginContainer}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/BrainboxTitle.png')}
        />
        <TextField
          title="Email"
          onChangeText={email => this.setState({email})}
        />
        <TextField
          title="Password"
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
        />
        <Button type="confirm" text="Login" onPress={this.login} />
        <Text style={styles.orStyle}>or</Text>
        <Button type="facebook" text="Facebook" />
        <Button type="google" text="Google" />
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
});

export default connect(null, {goToSignupPage, authenticateUser})(Login);
