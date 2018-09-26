import React, {Component} from 'react';
import {LocalImage, String, Button} from '../../reusables';
import {View, StyleSheet, Modal, TouchableOpacity, Text} from 'react-native';

export default class SubmitFeedbackModal extends Component {
  state = {
    rating: 5,
  };
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
                onPress={() => this.setState({rating: 1})}
                style={{
                  borderRadius: 5,
                  width: 50,
                  height: 50,
                }}>
                {this.state.rating >= 1 ? (
                  <LocalImage
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/fullstar.png')}
                  />
                ) : (
                  <LocalImage
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/emptystar.png')}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({rating: 2})}
                style={{
                  borderRadius: 5,
                  width: 50,
                  height: 50,
                }}>
                {this.state.rating >= 2 ? (
                  <LocalImage
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/fullstar.png')}
                  />
                ) : (
                  <LocalImage
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/emptystar.png')}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({rating: 3})}
                style={{
                  borderRadius: 5,
                  width: 50,
                  height: 50,
                }}>
                {this.state.rating >= 3 ? (
                  <LocalImage
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/fullstar.png')}
                  />
                ) : (
                  <LocalImage
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/emptystar.png')}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({rating: 4})}
                style={{
                  borderRadius: 5,
                  width: 50,
                  height: 50,
                }}>
                {this.state.rating >= 4 ? (
                  <LocalImage
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/fullstar.png')}
                  />
                ) : (
                  <LocalImage
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/emptystar.png')}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({rating: 5})}
                style={{
                  borderRadius: 5,
                  width: 50,
                  height: 50,
                }}>
                {this.state.rating >= 5 ? (
                  <LocalImage
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/fullstar.png')}
                  />
                ) : (
                  <LocalImage
                    resize
                    newWidth={50}
                    newHeight={50}
                    source={require('../../../assets/images/icons/emptystar.png')}
                  />
                )}
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
