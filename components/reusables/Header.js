import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import LocalImage from './LocalImage';
import String from './String';
import {windowDimensions} from '../../lib/device';
import {connect} from 'react-redux';
import Actions from '../../actions';
const {signoutUser, goToAccountSettings} = Actions;

const MenuItem = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      elevatation={2}
      style={{
        width: windowDimensions.width,
        height: 30,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
        padding: 5,
      }}>
      <String bold fontSize={14} text={props.text} />
    </TouchableOpacity>
  );
};

class Header extends React.Component {
  state = {
    openMenu: false,
  };
  render() {
    let maxHeight;
    if (this.state.openMenu) {
      maxHeight = 200;
    } else {
      maxHeight = 70;
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          backgroundColor: '#fafafa',
          maxHeight,
        }}>
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={this._toggleMenu}>
            <LocalImage
              rescale
              source={require('../../assets/images/avatars/defaultTutorAvatar.png')}
              originalWidth={57}
              originalHeight={61}
            />
          </TouchableOpacity>
          <LocalImage
            rescale
            source={require('../../assets/images/bboxTitlePage.png')}
            originalWidth={160}
            originalHeight={50}
          />
        </View>
        <View>
          <MenuItem
            text={'Account Settings'}
            onPress={this.props.goToAccountSettings}
          />
          <MenuItem text={'Help'} onPress={() => {}} />
          <MenuItem
            text={'Logout'}
            onPress={async () => await this.props.signoutUser}
          />
        </View>
      </View>
    );
  }
  _toggleMenu = event => {
    this.setState({openMenu: !this.state.openMenu});
  };
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    maxHeight: 150,
  },
  headerBar: {
    padding: 5,
    width: windowDimensions.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default connect(null, {signoutUser, goToAccountSettings})(Header);
