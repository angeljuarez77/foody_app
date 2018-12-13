import React, { Component } from 'react';
<<<<<<< HEAD
import LoggedInView from './components/LoggedIn/LoggedInView.js';
import Login from './components/LoggedOut/Login.js'
import CreateAccount from './components/LoggedOut/CreateAccount.js'
import Welcome from './components/Welcome.js'
import AllRecipes from './components/LoggedIn/AllRecipes.js';
import Recipe from './components/Recipe.js';

=======
import axios from 'axios';
import LoggedInView from './components/LoggedIn/LoggedInView';
import Login from './components/LoggedOut/Login';
import CreateAccount from './components/LoggedOut/CreateAccount';
import Welcome from './components/Welcome';
// import AllRecipes from './components/LoggedIn/AllRecipes';
// import Recipe from './components/Recipe';
import  './App.css';
>>>>>>> 06c62154001dc329871c58bc48fe46a5a3367a42

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      favorites: [
        {
          id: 3,
          url: 'youtube.com/fav1',
          title: 'veg fav',
          category: 'Vegetarian',
        },
        {
          id: 2,
          url: 'youtube.com/fav2',
          title: 'vegan fav',
          category: 'Vegan',
        },
      ],
<<<<<<< HEAD
      favoritesView : true
    }
}

// {
//   id: 1,
//   url: 'youtube.com',
//   title: 'Youtube Homepage',
//   category: 'Vegetarian'
// },
// {
//   id: 2,
//   url: 'youtube.com/food1',
//   title: 'Food 1',
//   category: 'Vegan'
// },
// {
//   id: 3,
//   url: 'youtube.com/food2',
//   title: 'Food 2',
//   category: ''
// }


=======
      favoritesView: false,
      selected: '',
      filterResults: [],
      view: 'loggedin',
    };
    this.renderFavorites = this.renderFavorites.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }


  async componentDidMount() {
    await this.getRecipes()
  }

  async getRecipes() {
    const results = await axios.get(`${BASE_URL}/recipes`);
    const recipes = results.data;
    // console.log(recipes);
    this.setState({ recipes });
  }

  async componentDidMount(){
    await this.getRecipes()
  }
>>>>>>> 06c62154001dc329871c58bc48fe46a5a3367a42

  setView(view) {
    this.setState({ view });
  }


<<<<<<< HEAD
setView = (view) =>{
  this.setState({
    view:view
  })
}


getView(){
  const view = this.state.view;
  switch (view) {
    case 'login':
      return <Login pageSwitch = {this.setView}/>
    case 'signup':
      return <CreateAccount pageSwitch = {this.setView}/>
    case 'loggedin':
      return <LoggedInView favoritesView={this.state.favoritesView} recipes={this.state.recipes} selected={this.state.selected} favorites={this.state.favorites}/>
    default:
      return <Welcome pageSwitch={this.setView}/>
=======
  getView() {
    const { view } = this.state;
    switch (view) {
      case 'login':
        return <Login />
      case 'signup':
        return <CreateAccount />
      case 'loggedin':
        return (
          <LoggedInView
            handleSelect={this.handleSelect}
            renderFavorites={this.renderFavorites}
            favoritesView={this.state.favoritesView}
            recipes={this.state.recipes}
            selected={this.state.selected}
            favorites={this.state.favorites}
            />
        )
      default:
        return <Welcome />
    }



  handleSelect(filter) {
    this.setState({
      selected: filter
    });
>>>>>>> 06c62154001dc329871c58bc48fe46a5a3367a42
  }

<<<<<<< HEAD
=======
  renderFavorites(nextView) {
    this.setState({
      favoritesView: nextView
    })
  }

>>>>>>> 06c62154001dc329871c58bc48fe46a5a3367a42
  render() {
    return (
      <div className="App">
      {this.getView()}
      </div>
    );
  }
}

export default App;
