import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {windowDimensions} from '../../../lib/device';
import {TutorCard} from '../../reusables';
import {connect} from 'react-redux';
import Actions from '../../../actions';
import {TutorAccountSettings} from '../../AccountSettings';
const {getAllTutors} = Actions;

class Tutors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorId: null,
    };
  }
  componentWillMount() {
    this.props.getAllTutors();
  }
  backToAllTutors = () => {
    this.setState({tutorId: null});
  };
  render() {
    console.log('userdashborad');
    console.log(this.props);
    let component;
    if (this.state.tutorId) {
      component = (
        <TutorAccountSettings
          back={this.backToAllTutors}
          tutorId={this.state.tutorId}
        />
      );
    } else {
      component =
        this.props.tutors &&
        this.props.tutors.tutors.map((tutor, index) => {
          return (
            <TutorCard
              key={index}
              onPress={e => this.showTutorInformation(tutor._id)}
              tutorName={`${tutor.firstname} ${tutor.lastname}`}
            />
          );
        });
    }
    return (
      <ScrollView
        style={{
          width: windowDimensions.width,
        }}>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-around',
            padding: 10,
          }}
        />
        {component}
      </ScrollView>
    );
  }
  showTutorInformation = tutorId => {
    this.setState({tutorId});
  };
  clearSelectedTutor = () => {
    this.setState({tutorId: null});
  };
}

const mapStateToProps = state => {
  console.log('state');
  console.log(state);
  return {
    tutors: state.ResourcesReducers && state.ResourcesReducers.tutors,
  };
};

export default connect(mapStateToProps, {getAllTutors})(Tutors);
