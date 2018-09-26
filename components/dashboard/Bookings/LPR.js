import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, String} from '../../reusables';
import Modal from 'react-native-modal';
import Dash from 'react-native-dash';
import ReportCard from './ReportCard';

class LearnersProgressReport extends Component {
  render() {
    const {isVisible} = this.props;
    return (
      <Modal isVisible={isVisible} style={styles.modalContainer}>
        <View style={styles.LPRContainer}>
          <View style={styles.modalHeader}>
            <Button
              onPress={this.props.toggleLPRModal}
              width={20}
              height={20}
              elevation={2}
              style={{
                backgroundColor: '#f3f3f3',
                alignSelf: 'flex-end',
              }}
              textStyle={{color: '#2b2b2b'}}
              type="warning"
              fontSize={16}
              text={'x'}
            />
            <String
              bold
              text={'Learners Progress Report'}
              style={{
                paddingBottom: 10,
              }}
            />
            <Dash
              style={{width: '100%', height: 2, marginBottom: 10}}
              dashLength={4}
              dashGap={5}
              dashThickness={1}
              dashColor={'#979797'}
            />
            <ReportCard />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-start',
  },
  modalHeader: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
  },
  LPRContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default LearnersProgressReport;
