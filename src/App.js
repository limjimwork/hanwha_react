import React, { Component } from 'react';
import Header from './components/header';
import Visual from './components/visual';
import Container from './components/container';
import Footer from './components/footer';
import './mobile.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Visual />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
