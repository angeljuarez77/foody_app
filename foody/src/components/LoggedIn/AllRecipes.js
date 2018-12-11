import React from 'react';
import Recipe from '../Recipe.js';


export default function AllRecipes(props){

  const selectedRecipes = props.recipes.filter(recipe => {
   return recipe.category === props.selected
    }
  )


  return(

    <div>
      <h3> Render Recipes </h3>


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
}
