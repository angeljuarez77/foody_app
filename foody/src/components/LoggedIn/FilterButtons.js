import React from 'react';
import { Button } from 'reactstrap';

export default function FilterButtons(props) {

return(
  <div>
      <Button onClick={()=>props.handleSelect('Vegan')} key='1' outline color="primary"> Vegan </Button>
      <Button onClick={()=>props.handleSelect('Vegetarian')} key='2' outline color="primary"> Vegetarian </Button>
      <Button onClick={()=>props.handleSelect('')} key="3" outline color="secondary"> Reset Filters </Button>
      <Button onClick={()=>props.renderFavorites(!props.favoritesView)} outline color="danger"> Favorites </Button>
      <Button outline color="success">Add Recipe </Button>
  </div>
  )
};
