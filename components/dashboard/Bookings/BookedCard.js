import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AccountType} from '../../../lib/constants';
import {String, LocalImage} from '../../reusables';

const BookedCard = props => {
  const {
    batchNumber,
    assignedTutor,
    programType,
    schedule,
    setIdSelected,
  } = props;
  return (
    <View elevation={2} style={styles.bookedContainer}>
      <TouchableOpacity style={styles.bookedCard} onPress={setIdSelected}>
        <View style={styles.bookedCardInformation}>
          <String text={programType} fontSize={14} bold />
          <String
            text={
              (!!batchNumber && batchNumber) ||
              (!!assignedTutor && `Tutor ${assignedTutor}`) ||
              'Some Info.'
            }
          />
          <String text={(!!schedule && schedule) || ''} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bookedContainer: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    width: '90%',
  },
  bookedCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 90,
    padding: 10,
  },
  bookedCardInformation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookedCard;
