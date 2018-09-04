import {connect} from 'react-redux';
import Actions from '../../../../actions';
import CEEPrograms from './CEEPrograms';
const {getAllCEEPrograms} = Actions;

const mapStateToProps = state => {
  return {
    programs: state.ResourcesReducer.availablePrograms,
  };
};

export default connect(mapStateToProps, {
  getAllCEEPrograms,
})(CEEPrograms);
