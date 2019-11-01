import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Card from './components/card';
import Button from './components/button';
import Navigation from './components/navigation';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Navigation />
      <Card name="JD" />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
