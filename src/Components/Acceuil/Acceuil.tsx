import React from 'react'
import { Navbar, Pagination } from 'react-bootstrap';
import Footer from './Footer';
import Body from './body';
import Navbar2 from '../navbar/Navbar2';


export default function Acceuil() {
  return (
    <div>
        <Navbar2/>
        <Body/>
        <Pagination/>
        <Footer/>
    </div>
  )
}
