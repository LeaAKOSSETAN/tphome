import React from 'react';
import ImageList from './ImageList';
import Posts from '../posts/Posts';
import Tags from './tags';

function Body() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-2/3 lg:w-3/4 p-4">
        <ImageList />
      </div>
      <div className="w-full md:w-1/3 lg:w-1/4 p-4">
        <Posts />
        <Tags />
      </div>
    </div>
  );
}

export default Body;
