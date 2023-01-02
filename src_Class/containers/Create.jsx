import { connect } from "react-redux";
import Create from "../components/Create";

export default connect(
  null,
  function(dispatch){
    return {
      onSubmit: function(title, desc) {
        dispatch({type: 'CREATE_PROCESS', title, desc});
      }
    }
  }
)(Create);