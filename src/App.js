import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Card name="JD" />
      <Button />
    </div>
  );
}

export default App;
