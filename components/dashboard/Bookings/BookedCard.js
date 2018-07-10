import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AccountType} from '../../../lib/constants';
import {String, LocalImage} from '../../reusables';

const BookedCard = props => {
  return (
    <View elevation={2} style={styles.bookedContainer}>
      <TouchableOpacity style={styles.bookedCard} onPress={props.setIdSelected}>
        <LocalImage
          resize
          source={
            props.type === 'tutorial'
              ? require('../../../assets/images/icons/oneononeicon.png')
              : require('../../../assets/images/icons/reviewicon.png')
          }
          newWidth={79}
          newHeight={79}
        />
        <View style={styles.bookedCardInformation}>
          <String text={props.programType} fontSize={12} bold />
          <String text={props.batchNumber || props.assignedTutor} />
          <String text={props.schedule} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bookedContainer: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  bookedCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    height: 90,
    backgroundColor: '#fafafa',
    padding: 10,
  },
  bookedCardInformation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookedCard;
