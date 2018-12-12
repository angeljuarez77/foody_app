import React from 'react';
import AllRecipes from './AllRecipes.js';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';


export default function LoggedInView(props) {

  return(
    <div>
      <h1> Logged In View </h1>

      <button> Vegan </button>
      <button> Vegetarian </button>
      <button> Clear Filters </button>


      {
          props.favoritesView
          ?
          <Favorites recipes={props.recipes} selected={props.selected} favorites={props.favorites}/>
          :
          <AllRecipes recipes={props.recipes} selected={props.selected} favorites={props.favorites}/>
      }

    </div>
  )
};
