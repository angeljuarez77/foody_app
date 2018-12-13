import React from 'react';


export default function FilterButtons(props) {

return(
  <div>
      <button onClick={()=>props.handleSelect('Vegan')} key='1' class='filter-button' id='vegan-filter-button'> Vegan </button>
      <button onClick={()=>props.handleSelect('Vegetarian')} key='2' class='filter-button' id='veg-filter-button'> Vegetarian </button>
      <button onClick={()=>props.handleSelect('')} key="3" class='filter-button' id='reset-filter-button'> Reset Filters </button>
      <button onClick={()=>props.renderFavorites(!props.favoritesView)} id='favorites-button'> Favorites </button>
      <button id='add-recipe'>Add Recipe </button>
  </div>
  )
};
