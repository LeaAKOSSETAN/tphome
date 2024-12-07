import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navbar, Pagination } from 'react-bootstrap';
import Navbar2 from './Components/navbar/Navbar2';
import Footer from './Components/Acceuil/Footer';
import Kitchen from './Components/Kitchen/Kitchen';
import Body from './Components/Acceuil/body';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar2/>
    <Body/>
    <Pagination/>
    <Footer/>
    <Kitchen/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
