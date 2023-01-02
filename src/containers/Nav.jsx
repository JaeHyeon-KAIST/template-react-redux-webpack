import { connect } from 'react-redux';
import Nav from '../components/Nav';

export default connect(
  function(state) {
    return {data: state.contents}
  },
  function(dispatch) {
    return {
      onClick: function(id) {
        dispatch({type:'READ', id:id})
      }
    }
  }
)(Nav);