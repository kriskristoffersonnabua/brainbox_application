import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {windowDimensions} from '../../../lib/device';
import LocalImage from '../../reusables/LocalImage';
import String from '../../reusables/String';
import TextField from '../../reusables/TextField';
import Dash from 'react-native-dash';

const Tutee = props => {
  return (
    <TouchableOpacity 
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%', 
        height: 33,
        borderWidth: 1,
        padding: 10,
        borderColor: '#979797',
        borderStyle: 'dotted',
        borderRadius: 5
      }}
    >
      <LocalImage
        source={require('../../../assets/images/icons/minusIcon.png')}
        originalWidth={17}
        originalHeight={17}
        style={{
          position: 'absolute',
          left: 10
        }}
      />
      <String text={props.name} fontSize={11}/>
    </TouchableOpacity>
  )
}
const AddButtonIcon = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 156
      }}>
      <LocalImage
        source={require('../../../assets/images/icons/plusIcon.png')}
        originalWidth={17}
        originalHeight={17}
      />
      <String text={props.text} fontSize={11} />
    </TouchableOpacity>
  );
};

class TutorialBooking extends Component {
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
            <String text={'BACK'} fontSize={11} />
          </TouchableOpacity>
        </View>
        <String
          bold
          text={'Tutorial Booking'}
          fontSize={11}
          style={{padding: 10}}
        />
        <Dash
          style={{width: '90%', height: 2, marginBottom: 10}}
          dashLength={5}
          dashGap={5}
          dashColor={'#979797'}
        />
        <String
          bold
          text={'Tutee/s:'}
          fontSize={11}
          style={{paddingLeft: 20, alignSelf: 'flex-start', marginBottom: 10}}
        />
        <Tutee name="John Doe"/>
        <AddButtonIcon text={'Add Existing Tutee'} onPress={() => {}} />
        <AddButtonIcon text={'Add New Tutee'} onPress={() => {}} />
        <Dash
          style={{width: '90%', height: 2, marginBottom: 10, marginTop: 10}}
          dashLength={5}
          dashGap={5}
          dashColor={'#979797'}
        />
        <TextField placeholder={"Address"} onChangeText={()=>{}} style={{
          width: '90%',
          marginBottom: 10
        }}/>
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
  },
  backButtonContainer: {
    width: windowDimensions.width,
    height: 25,
    padding: 5,
  },
  backButton: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default TutorialBooking;
