import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavContainer from './containers/Nav';
import ReadContainer from './containers/Read';
import ControlContainer from './containers/Control';
import CreateContainer from './containers/Create';
import UpdateContainer from './containers/Update';
import { connect } from 'react-redux';

function App({mode}) {
  var article = null;
  if(mode === 'READ' || mode === 'WELCOME') {
    article = <ReadContainer></ReadContainer>;
  } else if (mode === 'CREATE') {
    article = <CreateContainer></CreateContainer>;
  } else if (mode === 'UPDATE') {
    article = <UpdateContainer></UpdateContainer>;
  }

  return (
    <div className="App">
      <Header></Header>
      <NavContainer></NavContainer>
      <ControlContainer></ControlContainer>
      {article}
    </div>
  );
}

export default connect(
  function(state) {
    return {
      mode: state.mode
    }
  }
)(App);