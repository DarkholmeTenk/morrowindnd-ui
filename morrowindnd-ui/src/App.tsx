import React, { Component } from 'react';
import './App.css';
import CharacterDisplay from './ui/CharacterDisplay';

class App extends Component {
  render() {
    return <CharacterDisplay characterID='ABC' stuff='x'/>
  }
}

export default App;
