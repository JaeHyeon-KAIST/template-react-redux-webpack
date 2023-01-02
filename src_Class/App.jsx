import React, {Component, useState} from 'react';
import './App.css';
import Header from './components/Header';
import NavContainer from './containers/Nav';
import ReadContainer from './containers/Read';
import ControlContainer from './containers/Control';
import CreateContainer from './containers/Create';
import UpdateContainer from './containers/Update';
import { connect } from 'react-redux';

class App extends Component {
  render(){
    var article = null;
    if(this.props.mode === 'READ' || this.props.mode === 'WELCOME') {
      article = <ReadContainer></ReadContainer>;
    } else if (this.props.mode === 'CREATE') {
      article = <CreateContainer></CreateContainer>;
    } else if (this.props.mode === 'UPDATE') {
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
}