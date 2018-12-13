import React from 'react';
import AllRecipes from './AllRecipes';
import Recipe from '../Recipe';
import Favorites from './Favorites';
import RecipeForm from './RecipeForm';


export default function LoggedInView(props) {
  console.log(props.recipes)
  return(

    <div className="loggedinView" >
      <h1 id="loggedinViewH1"> Enjoy Your Favorite Recipes </h1>
        <RecipeForm />
      {
          props.favoritesView
          ?
          <Favorites
            recipes={props.recipes}
            selected={props.selected}
            favorites={props.favorites}
            renderFavorites={props.renderFavorites}
            handleSelect={props.handleSelect}
            favoritesView={props.favoritesView}
          />
          :
          <AllRecipes recipes={props.recipes}
          selected={props.selected} favorites={props.favorites} renderFavorites={props.renderFavorites}
          handleSelect={props.handleSelect}
          favoritesView={props.favoritesView}
          />
      }
    </div>
  )
};
