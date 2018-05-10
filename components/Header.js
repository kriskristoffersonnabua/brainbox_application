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
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';
const {Popover} = renderers;

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._openMenu}>
          <Image source={require('../assets/images/avatars/defaultAvatar.png')} />
        </TouchableOpacity>
        <Image source={require('../assets/images/BrainboxTitle.png')} />
        <Menu
          ref="menu"
          renderer={Popover}
          rendererProps={{anchorStyle: styles.menu}}>
          <MenuTrigger />
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => alert(`Not called`)}
              disabled={true}
              text="Disabled"
            />
          </MenuOptions>
        </Menu>
      </View>
    );
  }
  _openMenu = evt => {
    const {menu} = this.refs;
    if (menu._isOpen()) {
      menu.close();
    } else {
      menu.open();
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    height: 70,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 150,
  },
});

export default Header;
