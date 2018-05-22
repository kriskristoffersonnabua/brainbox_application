import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Header} from '../reusables';

class DashboardLayout extends React.Component {
  render() {
    const {template: Template} = this.props;
    return (
      <View style={styles.container}>
        <Header />
        <Template />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default DashboardLayout;
