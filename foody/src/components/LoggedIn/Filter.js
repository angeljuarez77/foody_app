import React from 'react';
import Recipe from '../Recipe.js';

export default function Filter(props){
    const selectedRecipes = props.recipes.filter(recipe => {
     return recipe.category === props.selected
      }
    )

    return(

      <div>
        {selectedRecipes.map(recipe=>(
          <Recipe
            key={recipe.id}
            url={recipe.url}
            title={recipe.title}
            />
          ))
        }

      </div>
    )
};
