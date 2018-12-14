import React from 'react';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';
import FilterButtons from './FilterButtons';


export default function AllRecipes(props) {
  console.log(props.recipes);
  return(

    <div className="recipe-list">
      <FilterButtons handleSelect={props.handleSelect} renderFavorites={props.renderFavorites} favoritesView={props.favoritesView}/>
          {
            props.selected
            ?
            props.recipes.filter(recipe => recipe.category === props.selected).map(recipe =>(
              <Recipe
                key={recipe.id}
                url={recipe.url}
                title={recipe.title}
                vidId={recipe.vidId}
                onDelete={() => props.deleteRecipe(recipe.id)}
                />
              ))

              :
              props.recipes.map(recipe=>(
                <Recipe
                  key={recipe.id}
                  url={recipe.url}
                  title={recipe.title}
                  vidId={recipe.vidId}
                 onDelete={() => props.deleteRecipe(recipe.id)}
                  />
                ))
          }

    </div>
  )
}
