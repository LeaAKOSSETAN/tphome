import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageList from './ImageList'
import Posts from '../posts/Posts'
import Tags from './tags';


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
