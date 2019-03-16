import React, { Component } from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <About/>
        {/* <Footer/>    */}
      </div>
    );
  }
}

export default App;
