import {connect} from 'react-redux';
import Actions from '../../../../actions';
import PSHSPrograms from './PSHSPrograms';
const {getAllPSHSPrograms} = Actions;

const mapStateToProps = state => {
  return {
    programs: state.ResourcesReducer.availablePrograms,
  };
};

export default connect(mapStateToProps, {
  getAllPSHSPrograms,
})(PSHSPrograms);
