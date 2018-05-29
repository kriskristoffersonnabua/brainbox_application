import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import ServicesList from './ServicesList';
import SearchTutor from './SearchTutor';
import TutorialBooking from './TutorialBooking';
import {Service} from '../../../lib/constants';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }
  render() {
    let component;
    switch (this.state.selected) {
      case Service.OneOnOneTutorial:
        component = (
          <SearchTutor back={() => this.setState({selected: null})} />
        );
        break;
      default:
        component = <ServicesList callback={i => this.selectService(i)} />;
        break;
    }
    return <View style={styles.container}>{component}</View>;
  }
  selectService = selected => {
    this.setState({selected});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
