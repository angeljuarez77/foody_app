import React from 'react';
import Recipe from '../Recipe.js';
import FilterButtons from './FilterButtons'


export default function Favorites(props){
  const selectedRecipes = props.favorites.filter(recipe => {
   return recipe.category === props.selected
    }
  )

  return(

    <div id="recipeframe">
    <div>
        <FilterButtons handleSelect={props.handleSelect} renderFavorites={props.renderFavorites} favoritesView={props.favoritesView}/>

        {
          props.selected
          ?
          props.recipes.filter(recipe => recipe.category === props.selected).map(recipe=>(
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
                videoId={recipe.vidId}
                />
              ))
        }
    </div>
    </div>
  )
}
