import React from 'react';
import './index.scss';

export default function Index(props) {
  return (
    <div className='title'>
      <span>{props.children}</span>
    </div>
  )
}

