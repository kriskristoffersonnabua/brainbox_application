import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Keyboard,
} from 'react-native';
import LocalImage from '../../reusables/LocalImage';
import {windowDimensions} from '../../../lib/device';
import Button from '../../reusables/Button';
import TextField from '../../reusables/TextField';
import TutorCard from '../../reusables/TutorCard';
import Dash from 'react-native-dash';
import {connect} from 'react-redux';
import Actions from '../../../actions';
const {searchTutor} = Actions;

class SearchTutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorName: '',
      subject: '',
      timeString: '',
      dateString: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={this.props.back} style={styles.backButton}>
            <LocalImage
              source={require('../../../assets/images/icons/backButton.png')}
              resize
              newWidth={15}
              newHeight={15}
            />
            <Text>BACK</Text>
          </TouchableOpacity>
        </View>
        <View elevation={2} style={styles.searchSection}>
          <View style={styles.searchFieldHeader}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: '#2b2b2b',
                fontFamily: 'RobotoMono',
              }}>
              Search Available Tutor:
            </Text>
          </View>
          <Dash
            style={{width: 310, height: 2}}
            dashLength={5}
            dashGap={5}
            dashColor={'#979797'}
          />
          <View style={{flex: 1}}>
            <TextField
              style={{marginBottom: -5, fontSize: 10}}
              width={290}
              placeholder="Tutor Name"
              onChangeText={value => {
                this.setState({tutorName: value});
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <TextField
                width={150}
                placeholder="Subject"
                onChangeText={value => {
                  this.setState({subject: value});
                }}
              />
              <TextField
                width={67}
                timepicker
                focusCallback={({newTime, newTimeString}) => {
                  this.setState({time: newTime, timeString: newTimeString});
                }}
                placeholder="Time"
                onChangeText={value => {
                  this.setState({time});
                }}
                value={this.state.timeString}
              />
              <TextField
                width={67}
                datepicker
                focusCallback={({newDate, newDateString}) => {
                  this.setState({date: newDate, dateString: newDateString});
                }}
                placeholder="Date"
                onChangeText={() => {}}
                value={this.state.dateString}
              />
            </View>
            <Button
              style={{alignSelf: 'center'}}
              type="confirm"
              text="Search"
              width={95}
              height={40}
              onPress={this.searchTutor}
            />
          </View>
        </View>
        <View
          style={{
            paddingRight: 20,
            paddingLeft: 20,
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          {this.props.searchedTutors != undefined &&
          this.props.searchedTutors.length > 0 ? (
            <Text
              style={{
                margin: 10,
              }}>
              Results:
            </Text>
          ) : null}
          <ScrollView style={{width: '100%', paddingTop: 10}}>
            {this.props.searchedTutors != undefined &&
              this.props.searchedTutors.map((tutor, index) => {
                console.log(tutor);
                return (
                  <TutorCard
                    key={index}
                    tutorName={
                      (!!tutor && `${tutor.firstname} ${tutor.lastname}`) ||
                      'tutor'
                    }
                    available
                    onPress={() => this.props.setTutorId(tutor._id)}
                  />
                );
              })}
          </ScrollView>
        </View>
      </View>
    );
  }
  searchTutor = () => {
    Keyboard.dismiss();
    const {tutorName, subject, date} = this.state;
    if (tutorName !== '' || subject !== '') {
      let searchString = `${tutorName} ${subject}`;
      if (date) {
        this.props.searchTutorByDate(date);
      } else {
        this.props.searchTutor(searchString);
      }
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  backButtonContainer: {
    width: '100%',
    height: 25,
  },
  backButton: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchSection: {
    width: 330,
    height: 185,
    backgroundColor: '#fafafa',
    marginTop: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchFieldHeader: {
    height: 40,
    width: '90%',
    alignItems: 'flex-start',
    padding: 10,
  },
});

const mapStateToProps = state => {
  return {
    searchedTutors:
      state.ResourcesReducer && state.ResourcesReducer.searchedTutors,
  };
};

export default connect(mapStateToProps, {
  searchTutor,
})(SearchTutor);
