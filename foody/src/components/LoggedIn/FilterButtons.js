import React from 'react';
import { Button } from 'reactstrap';

export default function FilterButtons(props) {

return(
  <div id="button-container">
    <div id="filter-buttons">
      <Button onClick={()=>props.handleSelect('Vegan')} key='1' outline color="primary" className="filter-button"> Vegan </Button>
      <Button onClick={()=>props.handleSelect('Vegetarian')} key='2' outline color="primary" className="filter-button"> Vegetarian </Button>
      <Button onClick={()=>props.handleSelect('')} key="3" outline color="secondary" className="filter-button"> All </Button>
    </div>
      <Button onClick={()=>props.renderFavorites(!props.favoritesView)} outline color="danger" id="fav-button" className="filter-button"> Favorites </Button>
  </div>
  )
};
