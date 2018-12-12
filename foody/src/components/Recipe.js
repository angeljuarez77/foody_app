import React from 'react';


export default function Recipe(props){
  return(
    <div>
      <h4> Recipe </h4>
      <p>{props.title}</p>
      <p>{props.url}</p>
      <div></div>
    </div>
  )
}
