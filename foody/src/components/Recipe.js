import React from 'react';
<<<<<<< HEAD


export default function Recipe(props){
  return(
    <div>
      <h4> Recipe </h4>
      <p>{props.title}</p>
      <p>{props.url}</p>
      <div></div>
=======
import YouTube from 'react-youtube';


export default function Recipe(props){
  const opts= {
      height: '250',
      width: '400',
      playerVars: {
        autoplay: 1
      }
    };
  return(
    <div className="recipeItems">
      <h3>{props.title}</h3>
    <div className="videoframe">
      <YouTube videoId={props.videoId} opts ={opts}/>
    </div>
>>>>>>> 06c62154001dc329871c58bc48fe46a5a3367a42
    </div>
  )
}
