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
import {windowDimensions} from '../../lib/device';
import {connect} from 'react-redux';
import Actions from '../../actions';
const {signoutUser} = Actions;

const MenuItem = props => {
  return (
    <TouchableOpacity 
      onPress={props.onPress} 
      elevated={5}
      style={{
        width: windowDimensions.width,
        height: 30,
        backgroundColor: "#cecece",
        shadowOpacity: 1,
        alignItems: 'center',
        padding: 5,
      }}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  )
}

class Header extends React.Component {
  state = {
    openMenu: false
  }
  render() {
    let maxHeight;
    if (this.state.openMenu) {
      maxHeight = 170;
    } else {
      maxHeight = 70;
    }
    return (
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        maxHeight
      }}>
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={this._toggleMenu}>
            <LocalImage
              source={require('../../assets/images/avatars/defaultAvatar.png')}
              originalWidth={57}
              originalHeight={61}
            />
          </TouchableOpacity>
          <LocalImage
            source={require('../../assets/images/BrainboxTitle.png')}
            originalWidth={225}
            originalHeight={50}
          />
        </View>
        <View>
          <MenuItem text={"Account Settings"} onPress={()=>{}}/>
          <MenuItem text={"Help"} onPress={()=>{}}/>
          <MenuItem text={"Logout"} onPress={this.props.signoutUser}/>
        </View>
      </View>
    );
  }
  _toggleMenu = (event) => {
    this.setState({openMenu: !this.state.openMenu})
  }
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

export default connect(null,{signoutUser})(Header);
