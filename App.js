import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './components/Button.js';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Config from 'react-native-config';
import { Provider } from 'react-redux';
import store from './lib/store';

type Props = {};
class App extends React.Component {
  render() {
    console.log(store);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Home />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App; 
