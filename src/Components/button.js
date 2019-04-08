import React from 'react';

export const Button = (props) => (
  <div>
    <button  onClick={props.onClick} > {props.children} </button>
  </div>
  
)