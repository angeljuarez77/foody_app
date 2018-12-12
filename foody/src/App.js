import React, { Component } from 'react';
import LoggedInView from './components/LoggedIn/LoggedInView.js';
import Login from './components/LoggedOut/Login.js'
import CreateAccount from './components/LoggedOut/CreateAccount.js'
import Welcome from './components/Welcome.js'
import AllRecipes from './components/LoggedIn/AllRecipes.js';
import Recipe from './components/Recipe.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: '',
      recipes: [
            {
              id: 1,
              url: 'youtube.com',
              title: 'Youtube Homepage',
              category: 'Vegetarian'
            },
            {
              id: 2,
              url: 'youtube.com/food1',
              title: 'Food 1',
              category: 'Vegan'
            },
            {
              id: 3,
              url: 'youtube.com/food2',
              title: 'Food 2',
              category: ''
            }
        ],
      favorites: [
        {
          id: 3,
          url: 'youtube.com/fav1',
          title: 'veg fav',
          category: 'Vegetarian'
        },
        {
          id: 2,
          url: 'youtube.com/fav2',
          title: 'vegan fav',
          category: 'Vegan'
        }
      ],
      favoritesView : true,
      categories : ['Vegan', 'Vegetarian'],
      selected: '',
      filterResults: [],
      view: 'loggedin'
    }
    this.renderFavorites = this.renderFavorites.bind(this);

    this.handleSelect = this.handleSelect.bind(this);
}


getView(){
  const view = this.state.view;
  switch (view) {
    case 'login':
      return <Login />
    case 'signup':
      return <CreateAccount />
    case 'loggedin':
      return <LoggedInView
              handleSelect={this.handleSelect}
              renderFavorites={this.renderFavorites}
              favoritesView={this.state.favoritesView}
              recipes={this.state.recipes}
              selected={this.state.selected}
              favorites={this.state.favorites}

              />
    default:
      return <Welcome />
  }
}

handleSelect(filter){
  this.setState({
    selected: filter
  });
}

renderFavorites(nextView){
  this.setState({
    favoritesView: nextView
  })
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
