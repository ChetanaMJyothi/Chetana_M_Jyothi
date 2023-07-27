import React from 'react'
import './One.css'
import Loader from './Loader.js';
const One = (props) => {
  console.log(props.disData);

  return (
    <div>
      <Loader />
      <h2>Url Of Website: {props.urlData}</h2>
      <p className='content_text'><span className='content_header'>Content Of Website: </span>{props.disData}</p>

    </div>
  )
}

export default One
