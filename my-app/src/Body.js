// Body.js
import React from 'react';
import './Body.css'; // You may create Body.css for styling if needed
import jsonData from './data.json';

const Body = () => {
  const { sections } = jsonData;
  
  return (
    <div>
      {sections.map((section, index) => (
        <div className='boxes' key={index}>
          <h5 className='heading'>{section.heading}</h5>
          <p className='para'>{section.para}</p>
        </div>
      ))}
    </div>
  );
}

export default Body;
