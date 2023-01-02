import React from 'react'
import { connect } from 'react-redux';

function Header({onClick}) {
  return (
    <header>
      <h1><a href="#welcome" onClick={() => {
        onClick();
      }}>WEB</a></h1>
      World Wide WEB
    </header>
  )
}

export default connect(
  null,
  function(dispatch){
    return {
      onClick: function() {
        dispatch({type:'WELCOME'})
      }
    }
  }
)(Header);
