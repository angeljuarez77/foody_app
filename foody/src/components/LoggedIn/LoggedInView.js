import React from 'react';
import AllRecipes from './AllRecipes.js';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';
<<<<<<< HEAD
// import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';
=======
import RecipeForm from './RecipeForm.js';
>>>>>>> 06c62154001dc329871c58bc48fe46a5a3367a42


export default function LoggedInView(props) {
  console.log(props.recipes)
  return(
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 06c62154001dc329871c58bc48fe46a5a3367a42
    <div className="loggedinView" >
      <h1 id="loggedinViewH1"> Enjoy Your Favorite Recipes </h1>

      <button className="categoryBtns"> Vegan </button>
      <button className="categoryBtns"> Vegetarian </button>
<<<<<<< HEAD
      {/* <Grid>
        <Avatar alt="Remy Sharp" src="https://www.instagram.com/p/BpvXqGeHA0r/"  />
      </Grid> */}

=======
    
>>>>>>> 06c62154001dc329871c58bc48fe46a5a3367a42
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
<<<<<<< HEAD
=======
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
>>>>>>> 06c62154001dc329871c58bc48fe46a5a3367a42

        <RecipeForm />
    </div>
  )
};
