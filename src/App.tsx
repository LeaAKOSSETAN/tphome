import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import Body from './components/Acceuil/body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
