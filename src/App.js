import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderText from './component/HeaderText';
import DescriptionComp from './component/DescriptionComp'
import DetailsComp from './component/DetailsComp'

const mainFormStyle = {
  margin : "30px",
  border : "solid 2px black" ,
  padding : "20px"
}

class App extends Component {
  render() {
    return (
      <div style={mainFormStyle}>
        <HeaderText initialName="Incident Long Form"/>
        <hr/>
        <DescriptionComp />
        <HeaderText initialName="when"/>
        <hr />
        <DetailsComp />
        </div>
    );
  }
}

export default App;
