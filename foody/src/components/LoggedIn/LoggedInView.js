import React from 'react';
import AllRecipes from './AllRecipes.js';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';



export default function LoggedInView(props) {
  console.log(props.recipes)
  return(
<<<<<<< HEAD
    <div className="loggedinView" >
      <h1 id="loggedinViewH1"> Enjoy Your Favorite Recipes </h1>

      <button className="categoryBtns"> Vegan </button>
      <button className="categoryBtns"> Vegetarian </button>
    
      {
          props.favoritesView
          ?
          <Favorites
            recipes={props.recipes}
            selected={props.selected}
            favorites={props.favorites}
          />
          :
          <AllRecipes recipes={props.recipes} selected={props.selected} favorites={props.favorites}/>
      }
=======
    <div>

        <h1> Recipes </h1>


        {
            props.favoritesView
            ?
            <Favorites renderFavorites={props.renderFavorites} handleSelect={props.handleSelect} recipes={props.recipes} selected={props.selected} favorites={props.favorites} favoritesView={props.favoritesView}/>
            :
            <AllRecipes renderFavorites={props.renderFavorites} handleSelect={props.handleSelect} recipes={props.recipes} selected={props.selected} favorites={props.favorites} favoritesView={props.favoritesView}/>
        }
>>>>>>> f5ab749a57649baecea457dbe7c174bc6b7df107

    </div>
  )
};
