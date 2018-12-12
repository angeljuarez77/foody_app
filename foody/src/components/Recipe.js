import React from 'react';
// import { Player } from 'video-react';
import YouTube from 'react-youtube';


export default function Recipe(props){
  const opts= {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

  // _onReady(event){
  //   event.target.pauseVideo();
  // };

  return(
    <div>
      <h4> Recipe </h4>
      <p>{props.title}</p>
      {/* <p>{props.url}</p> */}
    <div className="videoframe">
      <YouTube
      videoId='aafmrrx7Bh4'
      opts ={opts}/>
    </div>
    </div>
  )
}
