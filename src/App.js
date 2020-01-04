import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Depense from './components/depense';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Depense/>
      </div>
    );
  }
}

export default App;
