import React from 'react';
import {AsyncStorage} from 'react-native';
import TutorAccountSettingsEdit from './TutorAccountSettingsEdit';
import TutorAccountSettings from './TutorAccountSettings';
import ClientAccountSettingsEdit from './ClientAccountSettingsEdit';
import ClientAccountSettings from './ClientAccountSettings';
import {connect} from 'react-redux';
import Actions from '../../actions';
const {getUserInformation} = Actions;

class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const authToken = AsyncStorage.getItem('bboxAuthToken').then(authToken => {
      if (authToken != undefined && authToken != null) {
        this.props.getUserInformation();
      }
    });
  }
  render() {
    let component;
    const {user, edit} = this.props;
    if (user) {
      switch (user.user.accountType) {
        case 0:
          component = edit ? (
            <ClientAccountSettingsEdit />
          ) : (
            <ClientAccountSettings />
          );
          break;
        case 1:
          component = edit ? (
            <TutorAccountSettingsEdit />
          ) : (
            <TutorAccountSettings />
          );
          break;
        default:
          break;
      }
    } else {
      component = <ClientAccountSettings />;
    }
    return component;
  }
}

const mapStateToProps = state => {
  return {user: state.ResourcesReducer.user};
};

export default connect(mapStateToProps, {getUserInformation})(AccountSettings);
