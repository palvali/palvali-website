import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Header></Header>
          <Main></Main>
      	</div>
      </div>
    );
  }
}

export default App;
