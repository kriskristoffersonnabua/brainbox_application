import React, {Component} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import {LocalImage, String, Button, Subjects} from '../../reusables';
import MapView, {Marker} from 'react-native-maps';
import Dash from 'react-native-dash';

class SubmitFeedbackModal extends Component {
  state = {
    rating: 5,
  }
  render() {
    return (
      <Modal
        transparent={true}
        onRequestClose={this.props.cancelFeedbackModal}
        visible={this.props.feedbackModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(43,43,43,0.24)',
          }}>
          <View
            style={{
              width: '90%',
              backgroundColor: '#fafafa',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: 5,
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={this.props.toggleFeedbackModal}
              style={{
                position: 'absolute',
                right: 10,
                top: 10,
              }}>
              <Text>X</Text>
            </TouchableOpacity>
            <String text={'Feedback'} style={{marginBottom: 10}} />
            <TextField
              placeholder={'Remarks'}
              style={{
                width: '100%',
                marginBottom: 10,
              }}
            />
            <String
              text={'Tutor Rating:'}
              style={{marginBottom: 10, textAlign: 'left'}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                marginBottom: 10,
                padding: 5,
              }}>
              <TouchableOpacity
                onPress={()=>this.setState({rating: 1})}
                style={{
                  borderRadius: 5,
                  width: 50,
                  height: 50,
                }}
              >
                {this.state.rating >=1 ? 
                  <LocalImage 
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/fullstar.png')}
                  />:
                  <LocalImage 
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/emptystar.png')}
                  />}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>this.setState({rating: 2})}
                style={{
                  borderRadius: 5,
                  width: 50,
                  height: 50,
                }}
              >
                {this.state.rating >=2 ? 
                  <LocalImage 
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/fullstar.png')}
                  />:
                  <LocalImage 
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/emptystar.png')}
                  />}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>this.setState({rating: 3})}
                style={{
                  borderRadius: 5,
                  width: 50,
                  height: 50,
                }}
              >
                {this.state.rating >=3 ? 
                  <LocalImage 
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/fullstar.png')}
                  />:
                  <LocalImage 
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/emptystar.png')}
                  />}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>this.setState({rating: 4})}
                style={{
                  borderRadius: 5,
                  width: 50,
                  height: 50,
                }}
              >
                {this.state.rating >=4 ? 
                  <LocalImage 
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/fullstar.png')}
                  />:
                  <LocalImage 
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/emptystar.png')}
                  />}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>this.setState({rating: 5})}
                style={{
                  borderRadius: 5,
                  width: 50,
                  height: 50,
                }}
              >
                {this.state.rating >=5 ? 
                  <LocalImage 
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/fullstar.png')}
                  />:
                  <LocalImage 
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/emptystar.png')}
                  />}
              </TouchableOpacity>
            </View>
            <Button
              width={200}
              type="submit"
              text={'Submit'}
              fontSize={12}
              style={{
                alignSelf: 'center',
                height: 30,
              }}
              onPress={this.props.submitFeedback}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const ScheduledBooking = props => {
  return (
    <View
      elevation={2}
      style={{
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#BDF287',
      }}>
      <String text={'4-12-2018'} />
      <String text={'8:30'} />
      <String text={'4 hours'} />
    </View>
  );
};

class BookedTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'Kris Kristofferson',
      lastname: 'Nabua',
      address: 'V&G Subdivision, Blk. 2, Phase 4, Tacloban City, Leyte',
      subjects: ['College Algebra', 'Science and Health'],
      scheduledBookings: [],
      feedbackModal: false,
      tutees: [
        {
          firstname: 'Kris',
          lastname: 'Nabua',
        },
        {
          firstname: 'Kris',
          lastname: 'Nabua',
        },
      ],
    };
  }
  _toggleFeedbackModal = () => {
    this.setState({feedbackModal: !this.state.feedbackModal});
  }
  render() {
    return (
      <ScrollView
        style={{
          width: '100%',
        }}>
        <SubmitFeedbackModal toggleFeedbackModal={this._toggleFeedbackModal} feedbackModal={this.state.feedbackModal}/>
        <View style={styles.container}>
          <View
            style={{
              width: '100%',
              height: 25,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: 60,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <LocalImage
                source={require('../../../assets/images/icons/backButton.png')}
                resize
                newWidth={15}
                newHeight={15}
              />
              <Text>BACK</Text>
            </TouchableOpacity>
          </View>
          <String text={'Booked Tutorial'} style={{marginBottom: 10}} />
          <Dash
            style={{width: '100%', height: 2, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          <Button
            style={{marginBottom: 10}}
            fontSize={12}
            text={'Submit Feedback'}
            type="confirm"
            width={204}
            height={34}
            onPress={this._toggleFeedbackModal}
          />
          <Dash
            style={{width: '100%', height: 2, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 10,
            }}>
            <String text={'Batch #'} />
            <String text={`1`} style={{textAlign: 'right'}} />
          </View>
          <Dash
            style={{width: '100%', height: 2, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          <String
            text={'Address:'}
            style={{marginBottom: 10, alignSelf: 'flex-start'}}
          />
          <String text={this.state.address} style={{marginBottom: 10}} />
          <MapView
            initialRegion={{
              latitude: 11.249999,
              longitude: 125.0,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{
              height: 250,
              width: '100%',
              marginBottom: 10,
            }}
            provider="google"
            minZoomLevel={15}
            zoomControlEnabled={true}
            ref="maps"
          />
          <Dash
            style={{width: '100%', height: 2, marginTop: 10, marginBottom: 10}}
            dashLength={4}
            dashGap={5}
            dashThickness={1}
            dashColor={'#979797'}
          />
          <String
            text={'Scheduled Bookings:'}
            style={{marginBottom: 10, alignSelf: 'flex-start'}}
          />
          <View
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <ScheduledBooking />
          </View>
        </View>
      </ScrollView>
    );
  }
}
// {this.state.address && (
//   <Marker
//   coordinate={{
//     latitude: this.state.addressObject.latitude,
//       longitude: this.state.addressObject.longitude,
//   }}
//   />
// )}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
});

export default BookedTutorial;
