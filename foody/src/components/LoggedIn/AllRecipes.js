import React from 'react';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';
import FilterButtons from './FilterButtons.js';

export default function AllRecipes(props){

  return(

    <div>
      <FilterButtons handleSelect={props.handleSelect} renderFavorites={props.renderFavorites}/>
          {
            props.selected
            ?
            props.recipes.filter(recipe => recipe.category === props.selected).map(recipe=>(
              <Recipe
                key={recipe.id}
                url={recipe.url}
                title={recipe.title}
                />
              ))

              :
              props.recipes.map(recipe=>(
                <Recipe
                  key={recipe.id}
                  url={recipe.url}
                  title={recipe.title}
                  />
                ))
          }

    </div>
  )
}
