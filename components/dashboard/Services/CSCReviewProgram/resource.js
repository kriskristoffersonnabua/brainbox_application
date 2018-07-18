import {connect} from 'react-redux';
import Actions from '../../../../actions';
import CSCPrograms from './CSCPrograms';
const {getAllCSCPrograms} = Actions;

const mapStateToProps = state => {
  return {
    programs: state.ResourcesReducer.availablePrograms,
  };
};

export default connect(mapStateToProps, {getAllCSCPrograms})(CSCPrograms);
