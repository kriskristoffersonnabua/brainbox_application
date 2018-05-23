import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity, Text, ScrollView} from 'react-native';
import LocalImage from '../../reusables/LocalImage';
import {windowDimensions} from '../../../lib/device';
import Button from '../../reusables/Button';
import TextField from '../../reusables/TextField';
import TutorCard from '../../reusables/TutorCard';
import Dash from 'react-native-dash';

class SearchTutor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity style={styles.backButton}>
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
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#2b2b2b',
              fontFamily: 'RobotoMono',
            }}>Search Available Tutor:</Text>
          </View>
          <Dash style={{width: 310, height: 2}} dashLength={5} dashGap={5} dashColor={'#979797'}/>
          <View style={{flex: 1}}>
            <TextField style={{marginBottom: -5, fontSize: 10}} width={290} placeholder="Tutor Name" onChangeText={()=>{}} />
            <View style={{flexDirection: 'row'}}>
              <TextField width={150} placeholder="Subject" onChangeText={()=>{}} />
              <TextField width={67} placeholder="Time" onChangeText={()=>{}} />
              <TextField width={67} placeholder="Date" onChangeText={()=>{}} />
            </View>
            <Button style={{alignSelf: 'center'}}type="confirm" text="Search" width={95} height={40}/>
          </View>
        </View>
        <View style={{paddingRight: 20, paddingLeft: 20, flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={{
            margin: 10
          }}>Results:</Text>
          <ScrollView style={{width: '100%', paddingTop: 10}}>
            <TutorCard tutorName="Kris Kristofferson" available/>
            <TutorCard tutorName="Kris Kristofferson" available/>
            <TutorCard tutorName="Kris Kristofferson" available/>
            <TutorCard tutorName="Kris Kristofferson Nabue" />
            <TutorCard tutorName="Kris Kristofferson Nabue" />
            <TutorCard tutorName="Kris Kristofferson Nabue" />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10
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
    alignItems: 'center'
  },
  searchFieldHeader: {
    height: 40,
    width: '90%',
    alignItems: 'flex-start',
    padding: 10,
  },
});

export default SearchTutor;
