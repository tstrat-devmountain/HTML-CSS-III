import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <Services />
        <Portfolio />
        <About />
      </div>
    );
  }
}

export default App;
