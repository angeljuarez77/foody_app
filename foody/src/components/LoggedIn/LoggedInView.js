import React from 'react';
import AllRecipes from './AllRecipes.js';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';
// import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';


export default function LoggedInView(props) {
  console.log(props.recipes)
  return(
    <div className="loggedinView" >
      <h1 id="loggedinViewH1"> Enjoy Your Favorite Recipes </h1>

      <button className="categoryBtns"> Vegan </button>
      <button className="categoryBtns"> Vegetarian </button>
      {/* <Grid>
        <Avatar alt="Remy Sharp" src="https://www.instagram.com/p/BpvXqGeHA0r/"  />
      </Grid> */}

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

    </div>
  )
};
