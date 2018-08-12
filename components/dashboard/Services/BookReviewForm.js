import React from 'react';
import {Modal, View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {windowDimensions} from '../../../lib/device';
import {String, TextField, Button} from '../../reusables';
import {connect} from 'react-redux';
import Actions from '../../../actions';
const {createReviewAppointment} = Actions;

class BookReviewForm extends React.Component {
  state = {
    address: {
      address:
        '165 Avenida Veteranos, Downtown, Tacloban City, 6500 Leyte, Philippines',
      east: 125.00217583029146,
      latitude: 11.24156750000001,
      longitude: 125.00101953124998,
      name: `11°14'29.6"N 125°00'03.7"E`,
      north: 11.243089380291503,
      placeID: '7Q3762R2+JCCP',
      south: 11.240391419708498,
    },
    program: this.props.programId,
    //change this personal data to reviewee on submit form
    firstname: '',
    lastname: '',
    address: '',
    contact: '',
    // payment: [],
  };
  static getDerivedStateFromProps(nextProps) {
    if (!!nextProps.user) {
      const {firstname, lastname, address, contact} = nextProps.user;
      return {firstname, lastname, address, contact};
    }
    return null;
  }
  bookReview = () => {
    const {firstname, lastname, address, contact, ...otherState} = this.state;
    let appointmentData = {
      reviewee: {
        firstname,
        lastname,
        address,
        contact,
      },
      ...otherState,
    };
    this.props.createReviewAppointment(appointmentData);
  };
  render() {
    const {firstname, lastname, address, contact} = this.state;
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
              <TextField
                onChangeText={text => this.setState({firstname: text})}
                placeholder={'Firstname'}
                value={firstname || ''}
              />
              <TextField
                onChangeText={text => this.setState({lastname: text})}
                placeholder={'Lastname'}
                value={lastname || ''}
              />
              <TextField
                onChangeText={text => this.setState({address: text})}
                placeholder={'Address'}
                value={address || ''}
              />
              <TextField
                onChangeText={text => this.setState({contact: text})}
                placeholder={'Contact'}
                value={contact || ''}
              />
            </View>
            <View style={styles.programCTAS}>
              <Button
                text={'Cancel'}
                type="cancel"
                width={115}
                height={40}
                onPress={this.props.unShowBookForm}
              />
              <Button
                onPress={this.bookReview}
                width={115}
                height={40}
                text={'Confirm'}
                type="confirm"
              />
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

const mapStateToProps = state => {
  return {user: state.ResourcesReducer.user};
};

export default connect(mapStateToProps, {createReviewAppointment})(
  BookReviewForm,
);
