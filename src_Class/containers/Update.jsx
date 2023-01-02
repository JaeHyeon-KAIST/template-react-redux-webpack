import { connect } from "react-redux";
import Update from "../components/Update";

export default connect(
  function(state){
    var title, desc, id;
    for(var i = 0; i < state.contents.length; i++) {
        var d = state.contents[i];
        if (d.id === state.selected_content_id) {
          title = d.title;
          desc = d.desc;
          id = d.id;
          break;
        }
      }
    return { title, desc, id }
  },
  function(dispatch){
    return {
      onSubmit: function(id, title, desc) {
        dispatch({
          type: "UPDATE_PROCESS",
          id,
          title,
          desc
        })
      }
    }
  }
)(Update);