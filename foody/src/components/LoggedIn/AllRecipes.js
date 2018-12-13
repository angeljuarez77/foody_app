import React from 'react';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';
import FilterButtons from './FilterButtons.js';

export default function AllRecipes(props){
  console.log(props.recipes);
  return(

<<<<<<< HEAD
    <div >

=======
    <div>
      <FilterButtons handleSelect={props.handleSelect} renderFavorites={props.renderFavorites} favoritesView={props.favoritesView}/>
>>>>>>> f5ab749a57649baecea457dbe7c174bc6b7df107
          {
            props.selected
            ?
            props.recipes.filter(recipe => recipe.category === props.selected).map(recipe =>(
              <Recipe
                key={recipe.id}
                url={recipe.url}
                title={recipe.title}
                vidId={recipe.videoid}
                />
              ))

              :
              props.recipes.map(recipe=>(
                <Recipe
                  key={recipe.id}
                  url={recipe.url}
                  title={recipe.title}
                  vidId={recipe.videoid}
                  />
                ))
          }

    </div>
  )
}
