import React, { Component } from 'react';
import AllRecipes from './AllRecipes.js';


export default function LoggedInView() {

  return(
    <div>
      <h1> Logged In View </h1>
      <button> Show All </button>
      <button> Only Vegan </button>
      <button> Only Vegetarian </button>


      <AllRecipes />

    </div>
  )
};
