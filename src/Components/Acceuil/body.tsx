import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageList from './ImageList'
import Tags from './tags';
import Posts from '../Posts';


export default function Body() {
  return (
    <div className='row'>
        <div className='col-8'>
           <ImageList/>
        </div>
        <div className='col-4'>
           <Posts/>
           <Tags/>
        </div>
    </div>
  )
}
