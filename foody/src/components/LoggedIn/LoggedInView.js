import React from 'react';
import AllRecipes from './AllRecipes';
import Recipe from '../Recipe';
import Favorites from './Favorites';
import RecipeForm from './RecipeForm';


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
