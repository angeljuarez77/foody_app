import React from 'react';
import AllRecipes from './AllRecipes.js';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';
import RecipeForm from './RecipeForm.js';


export default function LoggedInView(props) {

  return(
    <div>

        <h1> Recipes </h1>


        {
            props.favoritesView
            ?
            <Favorites renderFavorites={props.renderFavorites} handleSelect={props.handleSelect} recipes={props.recipes} selected={props.selected} favorites={props.favorites} favoritesView={props.favoritesView}/>
            :
            <AllRecipes renderFavorites={props.renderFavorites} handleSelect={props.handleSelect} recipes={props.recipes} selected={props.selected} favorites={props.favorites} favoritesView={props.favoritesView}/>
        }

        <RecipeForm />
    </div>
  )
};
