import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageList1 from './ImageList1'
import Tags from '../Acceuil/tags';
import Posts from '../Posts';


export default function Body1() {
  return (
    <div className='row'>
        <div className='col-8'>
           <ImageList1/>
        </div>
        <div className='col-4'>
           <Posts/>
           <Tags/>
        </div>
    </div>
  )
}
