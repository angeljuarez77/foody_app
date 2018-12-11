import React, { Component } from 'react';
import LoggedInView from './components/LoggedIn/LoggedInView.js';
import Login from './components/LoggedOut/Login.js'
import CreateAccount from './components/LoggedOut/CreateAccount.js'
import Welcome from './components/Welcome.js'
import AllRecipes from './components/LoggedIn/AllRecipes.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'loggedin',
      recipes: [
            {
              id: 1,
              url: 'youtube.com',
              title: 'Youtube Homepage',
              category: 'Vegetarian'
            },
            {
              id: 2,
              url: 'youtube.com/amazingvideo',
              title: 'Amazing Video',
              category: 'Vegan'
            },
            {
              id: 3,
              url: 'youtube.com/funnyanimal',
              title: 'Funny Animal',
              category: ''
            }
        ],
      selected: 'Vegetarian',
      filterResults: [],
      favorites: [
        {
          id: 3,
          url: 'youtube.com/funnyanimal',
          title: 'Funny Animal',
          category: ''
        },
        {
          id: 2,
          url: 'youtube.com/amazingvideo',
          title: 'Amazing Video',
          category: 'Vegan'
        }
      ]
    }

    this.filterResult = this.filterResult.bind(this);
  }



getView(){
  const view = this.state.view;
  switch (view) {
    case 'login':
      return <Login />
    case 'signup':
      return <CreateAccount />
    case 'loggedin':
      return <LoggedInView filterResult={this.filterResult} recipes={this.state.recipes} selected={this.state.selected} favorites={this.state.favorites}/>
    default:
      return <Welcome />
  }
}



filterResult(arr){

  const selectedRecipes = arr.filter(recipe => recipe.category === this.state.selected)
  console.log(selectedRecipes);
    this.setState({
      filterResults:selectedRecipes
    })
  console.log(selectedRecipes);
}



  render() {

    return (
      <div className="App">
      {this.getView()}

      </div>
    );
  }
}

export default App;
