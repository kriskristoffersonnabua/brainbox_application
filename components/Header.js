import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  Alert,
  TouchableOpacity
} from 'react-native';
import {windowDimensions} from ''

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../assets/images/avatars/defaultAvatar.png')} />
        </TouchableOpacity>
        <Image source={require('../assets/images/BrainboxTitle.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 150,
    height: 70,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default Header;
