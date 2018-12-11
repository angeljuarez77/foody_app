import React from 'react';
import Recipe from '../Recipe.js';
import Filter from './Filter.js';
import Favorites from './Favorites.js';


export default function AllRecipes(props){

  return(

    <div>
      <h3> Render Recipes </h3>
      <h2> filter: </h2>
      <Filter recipes={props.recipes} selected={props.selected}/>
      <Favorites />
    </div>
  )
}
