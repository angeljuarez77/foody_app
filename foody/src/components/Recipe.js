import React from 'react';
import YouTube from 'react-youtube';
import { Button } from 'reactstrap';
import './LoggedIn/LoggedIn.css';


export default function Recipe(props) {
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
      <YouTube videoId={props.vidId} opts ={opts}/>
      <Button onClick={props.onDelete} outline color="secondary" size="sm">Delete Recipe</Button>
    </div>
  </div>
  )
}
