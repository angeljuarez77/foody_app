import React from 'react';


export default function FilterButtons(props) {

return(
  <div>
      <button onClick={()=>props.handleSelect('Vegan')} key='1' id='vegan-filter-button'> Vegan </button>
      <button onClick={()=>props.handleSelect('Vegetarian')} key='2' id='veg-filter-button'> Vegetarian </button>
      <button onClick={()=>props.handleSelect('')} key="3" id='reset-filter-button'> Reset Filters </button>
      <button onClick={()=>props.renderFavorites(!props.favoritesView)} id="favorites-button"> Favorites </button>
  </div>
  )
};
