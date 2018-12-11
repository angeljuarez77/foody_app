import React, { Component } from 'react';
import AllRecipes from './AllRecipes.js';
import VeganRecipes from './VeganRecipes.js';
import VegetarianRecipes from './VegetarianRecipes.js';


class LoggedInView extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: 'vegan'
    }
  }

  getView(){
    const filter = this.state.filter;
    switch (filter) {
      case 'all':
        return <AllRecipes />
      case 'vegan':
        return <VeganRecipes />
      case 'vegetarian':
        return <VegetarianRecipes />
      default:
        return <AllRecipes />
    }
  }



  render(){
  return(
    <div>
      <h1> Logged In View </h1>
      <button> Show All </button>
      <button> Only Vegan </button>
      <button> Only Vegetarian </button>

      {this.getView()}

    </div>
  )}
}


export default LoggedInView;
