import React from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';
import {windowDimensions} from '../../../lib/device';
import {String, TextField, Button} from '../../reusables';

class BookReviewForm extends React.Component {
  state = {};
  render() {
    return (
      <Modal
        transparent={true}
        onRequestClose={() => {}}
        visible={this.props.showForm}>
        <View style={styles.modalContainer}>
          <View style={styles.modalWrapper}>
            <String style={styles.programTitle} text={'Civil Service Review'} />
            <View style={styles.programForm}>
              <String text={'Reviewiee Information:'} />
              <TextField placeholder={'Firstname'} />
              <TextField placeholder={'Lastname'} />
              <TextField placeholder={'Address'} />
              <TextField placeholder={'Contact'} />
            </View>
            <View style={styles.programCTAS}>
              <Button
                text={'Cancel'}
                type="cancel"
                width={115}
                height={40}
                onPress={this.props.unShowBookForm}
              />
              <Button width={115} height={40} text={'Confirm'} type="confirm" />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(43,43,43,0.24)',
  },
  modalWrapper: {
    width: 300,
    height: 380,
    backgroundColor: '#fafafa',
  },
  programTitle: {
    width: '100%',
    height: 50,
    backgroundColor: '#E66464',
    padding: 10,
    color: '#fafafa',
    fontSize: 14,
  },
  programForm: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    padding: 10,
  },
  programCTAS: {
    height: 'auto',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default BookReviewForm;
