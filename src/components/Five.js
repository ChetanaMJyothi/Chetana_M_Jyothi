import React from 'react'
import Loader from './Loader.js';

const Five = (props) => {
  return (
    <div>
      <Loader />
      <h2>Url Of Website: {props.urlData}</h2>
      <p className='content_text'><span className='content_header'>Content Of Website: </span>{props.disData}</p>
    </div>
  )
}

export default Five
