import React from 'react'
import Navbar2 from '../navbar/Navbar2'
import { Pagination } from 'react-bootstrap'
import Footer from './Footer'
import Body1 from './body1'
import NavbarK from './navbar/NavbarK'

export default function Kitchen() {
  return (
    <div>
        <NavbarK/>
        <Body1/>
        <Pagination/>
        <Footer/>
    </div>
  )
}
