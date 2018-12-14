import React from 'react';
import AllRecipes from './AllRecipes';
import Recipe from '../Recipe';
import Favorites from './Favorites';
import RecipeForm from './RecipeForm';


export default function LoggedInView(props) {
  return(

    <div className="loggedinView" >
      <h1 id="loggedinViewH1"> Enjoy Your Favorite Recipes </h1>

      {/* {
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
    <div> */}

        <h1> Recipes </h1>

      {
            props.favoritesView
            ?
            <Favorites renderFavorites={props.renderFavorites} handleSelect={props.handleSelect} recipes={props.recipes} selected={props.selected} favorites={props.favorites} favoritesView={props.favoritesView} deleteRecipe={props.deleteRecipe} />
            :
            <AllRecipes renderFavorites={props.renderFavorites} handleSelect={props.handleSelect} recipes={props.recipes} selected={props.selected} favorites={props.favorites} favoritesView={props.favoritesView} deleteRecipe={props.deleteRecipe}/>
        }

        <RecipeForm
          recipeForm={props.recipeForm}
          handleChange={props.handleChange}
          submitRecipe={props.submitRecipe}
        />
    </div>
  )
};
