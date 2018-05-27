import React, { Component} from 'react';
import {AccountType} from '../../lib/constants';
import {Header, String, TextField, Subjects, LocalImage, Button} from '../reusables';
import {ScrollView, View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import TutorSchedule from './TutorSchedule';

class TutorAccountSettingsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'Kris Kristofferson',
      lastname: 'Nabue',
      sex: "Male",
      email: 'kc.nabua@goabroad.com',
      contact: '09364430277',
      address: "V&G, phase 1, blk 11, maharlika, manila, tacloban city",
      birthdayString: '11-12-1993',
      accountType: 1,
      accountTypeString: 'Tutor',
      isMale: false
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
      <TouchableOpacity style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
      }}>
      <LocalImage
        source={require('../../assets/images/icons/backButton.png')}
      resize
      newWidth={15}
      newHeight={15}
      style={{
        marginRight: 10
      }}
    />
      <Text>BACK</Text>
    </TouchableOpacity>
    <LocalImage
      source={require('../../assets/images/avatars/defaultTutorAvatar.png')}
      resize
      newWidth={150}
      newHeight={160}
      style={{
        marginRight: 10,
        alignSelf: 'center'
      }}
    />
      <View style={{
        flexDirection: 'row'
      }}>
      <String text={`${this.state.firstname} ${this.state.lastname}`} fontSize={14} />
      </View>
      <String 
        text={this.state.accountTypeString}
        fontSize={14}
        style={{
          marginRight: 10,
          marginBottom: 10
        }}
      />
      <String 
        text={this.state.sex}
        fontSize={14}
        style={{
          marginRight: 10,
          marginBottom: 10
        }}
      />
      {
        this.state.accountType == AccountType.Tutor? [
        <String text={"Subjects Handled:"} style={{
          width: '100%',
          marginBottom: 10
        }}/>,
          <Subjects style={{width: '100%', marginTop: 10, marginBottom: 10}} readOnly={true}/>
        ]: null
      }
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
      }}>
      <String fontSize={14} text={"Contact:"} />
      <String fontSize={12} text={this.state.contact} />
      </View>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
      }}>
      <String fontSize={14} text={"Address:"} />
      <String 
        fontSize={12}
        style={{
        width: 230,
        textAlign: 'right'
      }}text={this.state.address} />
      </View>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
      }}>
      <String fontSize={14} text={"Birthday:"} />
      <String 
        fontSize={12}
        style={{
        width: 230,
        textAlign: 'right'
      }}text={this.state.birthdayString} />
      </View>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
      }}>
      <String fontSize={14} text={"Email:"} />
      <String 
        fontSize={12}
        style={{
        width: 230,
          textAlign: 'right',
          marginBottom: 40
      }}text={this.state.email} />
      </View>
      <String 
      text={"Tutor Available Schedule: "}
      fontSize={14}
      style={{
        alignSelf: 'flex-start',
        marginBottom: 10
      }}
      />
      <TutorSchedule readOnly allTutorSchedule={this._allSchedule}/>
      <Button 
        text={"Edit"}
        style={{
          marginTop: 20,
          marginBottom: 10,
          alignSelf: 'center'
        }}
      />
      </View>
      </ScrollView>
    );
  }
  _allSchedule = (schedule) => {
    this.setState({ tutorSchedule: schedule });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    alignItems: 'center'
  }
})

export default TutorAccountSettingsEdit;
