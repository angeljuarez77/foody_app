import React, { Component } from 'react';
import axios from 'axios';
import LoggedInView from './components/LoggedIn/LoggedInView';
import Login from './components/LoggedOut/Login';
import CreateAccount from './components/LoggedOut/CreateAccount';
import Welcome from './components/Welcome';
// import AllRecipes from './components/LoggedIn/AllRecipes';
// import Recipe from './components/Recipe';
import './App.css';

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
      recipeForm: {
        vidId: '',
        title: '',
        description: '',
        category: '',
        rating: ''
      }
    };
    this.renderFavorites = this.renderFavorites.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
  }

  async componentDidMount() {
    await this.getRecipes();
  }

  async getRecipes() {
    const results = await axios.get(`${BASE_URL}/recipes`);
    const recipes = results.data;
    // console.log(recipes);
    this.setState({ recipes });
  }

  setView(view) {
    this.setState({ view });
  }


  getView() {
    const { view } = this.state;
    switch (view) {
      case 'login':
        return <Login />;
      case 'signup':
        return <CreateAccount />;
      case 'loggedin':
        return (
          <LoggedInView
            className="recipeframe"
            handleSelect={this.handleSelect}
            renderFavorites={this.renderFavorites}
            favoritesView={this.state.favoritesView}
            recipes={this.state.recipes}
            selected={this.state.selected}
            favorites={this.state.favorites}
            recipeForm={this.state.recipeForm}
            handleChange={this.handleChange}
            submitRecipe={this.submitRecipe}
          />
        );
      default:
        return <Welcome />;
    }
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState(prevState => ({
      prevState,
      recipeForm: {
        ...prevState.recipeForm,
        [name]: value
      }
    }));
  }

async submitRecipe(e) {
  e.preventDefault();
  try {
    await axios.post(`${BASE_URL}/recipes`, this.state.recipeForm);
  } catch (e) {
    console.log(e);
  } finally {
    this.setState({
      recipeForm: {
        vidId: '',
        title: '',
        description: '',
        category: '',
        rating: ''
      }
    });
  }
}

  handleSelect(filter) {
    this.setState({
      selected: filter,
    });
  }

  renderFavorites(nextView) {
    this.setState({
      favoritesView: nextView,
    });
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
