import React from 'react';
import AllRecipes from './AllRecipes.js';
import Recipe from '../Recipe.js';
import Filter from './Filter.js';
import Favorites from './Favorites.js';


export default function LoggedInView(props) {

  return(
    <div>
      <h1> Logged In View </h1>

      <button> Show All </button>
      <button> Only Vegan </button>
      <button> Only Vegetarian </button>
      <button onClick={() => props.filterResult(props.recipes)}> test filter recipes </button>

        <h3> Filter: </h3>
        <Filter recipes={props.recipes} selected={props.selected}/>

        <h3> Favorties: </h3>
        <Favorites favorites={props.favorites} selected={props.selected}/>

    </div>
  )
};
