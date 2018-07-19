import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {String} from '../../reusables';
import {windowDimensions} from '../../../lib/device';

const ProgramCard = props => {
  return (
    <View elevation={2} style={styles.wrapper}>
      <TouchableOpacity style={styles.touchableWrapper}>
        <View elevation={2} style={styles.programCard}>
          <View style={styles.programInfo}>
            <String bold text={'Civil Service Reveiw'} />
            <String text={'batch 2'} />
            <String text={'Jul 1 - Aug 22, 2018'} />
          </View>
          <View style={styles.slotsInfo}>
            <String bold text={'slots'} fontSize={12} />
            <String bold text={'45'} fontSize={48} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: windowDimensions.width,
    height: 'auto',
  },
  touchableWrapper: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    padding: 5,
  },
  programCard: {
    width: '90%',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0,
    height: 90,
  },
  programInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },
  slotsInfo: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderLeftWidth: 1,
    borderColor: '#b6b6b6',
  },
});

export default ProgramCard;
