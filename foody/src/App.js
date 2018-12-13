import React, { Component } from 'react';
import axios from 'axios';
import LoggedInView from './components/LoggedIn/LoggedInView';
import Login from './components/LoggedOut/Login';
import CreateAccount from './components/LoggedOut/CreateAccount';
import Welcome from './components/Welcome';
// import AllRecipes from './components/LoggedIn/AllRecipes';
// import Recipe from './components/Recipe';
import  './App.css';

const BASE_URL = 'http://localhost:3001';

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

  setView(view) {
    this.setState({ view });
  }


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
  }

  renderFavorites(nextView) {
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
