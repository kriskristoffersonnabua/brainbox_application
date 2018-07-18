import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {windowDimensions} from '../../../../lib/device';
// import ProgramsListView from '../ProgramsListView';

class CSCPrograms extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //fetch all csc programs
    this.props.getAllCSCPrograms();
  }

  render() {
    const {programs} = this.props;
    let Component;
    if (programs != undefined && !!programs.length) {
      // Component = <ProgramsListView programs={programs} />;
    } else
      Component = (
        <View style={styles.container}>
          <Text>No Programs in CSC Review</Text>
        </View>
      );

    return Component;
  }
}

const styles = StyleSheet.create({
  container: {
    width: windowDimensions.width,
    height: windowDimensions.height,
    paddingTop: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default CSCPrograms;
