import React from 'react';
import AllRecipes from './AllRecipes.js';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';



export default function LoggedInView(props) {

  return(
    <div>
      <h1> Logged In View </h1>


      {
          props.favoritesView
          ?
          <Favorites handleSelect={props.handleSelect} recipes={props.recipes} selected={props.selected} favorites={props.favorites}/>
          :
          <AllRecipes handleSelect={props.handleSelect} recipes={props.recipes} selected={props.selected} favorites={props.favorites}/>
      }

    </div>
  )
};
