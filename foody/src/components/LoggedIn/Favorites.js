import React from 'react';
import Recipe from '../Recipe.js';


export default function Favorites(props){
  const selectedRecipes = props.favorites.filter(recipe => {
   return recipe.category === props.selected
    }
  )

  return(
    <div>
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
