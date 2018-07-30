import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {windowDimensions} from '../../../../lib/device';
import ProgramsListView from '../ProgramsListView';
import {LocalImage, Button} from '../../../reusables';
// import ProgramCard from '../ProgramCard';
import ProgramView from '../ProgramView';

class CSCPrograms extends Component {
  state = {
    selectedProgram: null,
    showForm: false,
  };

  componentWillMount() {
    //fetch all csc programs
    this.props.getAllCSCPrograms();
  }

  back = () => {
    if (!!this.state.selectedProgram) {
      this.setState({selectedProgram: null});
    } else {
      this.props.back();
    }
  };

  selectProgram = program => {
    this.setState({selectedProgram: program});
  };

  showBookForm = () => this.setState({showForm: true});
  unShowBookForm = () => this.setState({showForm: false});

  render() {
    const {programs} = this.props;
    let Component;
    if (programs != undefined && !!programs.length) {
      if (!!this.state.selectedProgram) {
        Component = (
          <ProgramView
            showForm={this.state.showForm}
            unShowBookForm={this.unShowBookForm}
            program={this.state.selectedProgram}
          />
        );
      } else {
        Component = (
          <ProgramsListView
            programs={programs}
            selectProgram={this.selectProgram}
          />
        );
      }
    } else
      Component = (
        <View style={styles.container}>
          <Text>No Programs in CSC Review</Text>
        </View>
      );
    return (
      <View style={{width: windowDimensions.width, height: 'auto'}}>
        <View style={styles.ctaContainer}>
          <TouchableOpacity onPress={this.back} style={styles.backButton}>
            <LocalImage
              source={require('../../../../assets/images/icons/backButton.png')}
              resize
              newWidth={25}
              newHeight={15}
            />
            <Text>BACK</Text>
          </TouchableOpacity>
          {!!this.state.selectedProgram ? (
            <Button
              type="confirm"
              text={'Book Review'}
              onPress={this.showBookForm}
              fontSize={12}
              width={120}
              height={30}
            />
          ) : null}
        </View>
        {Component}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ctaContainer: {
    width: windowDimensions.width,
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  backButton: {
    height: 'auto',
  },
});

export default CSCPrograms;
