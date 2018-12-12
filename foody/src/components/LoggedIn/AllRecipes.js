import React from 'react';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';


export default function AllRecipes(props){

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
