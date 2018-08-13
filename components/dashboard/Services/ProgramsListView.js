import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {windowDimensions} from '../../../lib/device';
import ProgramCard from './ProgramCard';

class ProgramListView extends React.Component {
  state = {
    programs: [],
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!!nextProps.programs) {
      return {
        programs: nextProps.programs,
      };
    }
    return null;
  }

  render() {
    const {programs} = this.state;
    return (
      <ScrollView>
        {programs.map((program, index) => {
          return (
            <ProgramCard
              key={index}
              selectProgram={this.props.selectProgram}
              program={program}
            />
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    width: windowDimensions.width,
    height: 'auto',
    justifyContent: 'center',
  },
});

export default ProgramListView;
