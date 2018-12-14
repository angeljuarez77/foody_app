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
      view: '',
      newUser: {
        name: '',
        password: '',
      },
      recipeForm: {
        vidId: '',
        title: '',
        description: '',
        category: '',
        rating: '',
      },
      loggedIn: false,
      token: null,
    };
    this.renderFavorites = this.renderFavorites.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
    this.setView = this.setView.bind(this);
    this.postNew = this.postNew.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validateLog = this.validateLog.bind(this);
  }

  async getRecipes() {
    const results = await axios.get(`${BASE_URL}/recipes`);
    const recipes = results.data;
    this.setState({ recipes });
  }

  async componentDidMount(){
    await this.getRecipes()
  }

  setView(view) {
    this.setState({
      view: view
    })
  }

  getView() {
    // const { view } = this.state;
    switch (this.state.view) {
      case 'login':
        return <Login pageSwitch={this.setView} onSubmit={this.validateLog} onChange={this.onChange} />;
      case 'signup':
        return (
          // put new user inside of state
          <CreateAccount pageSwitch={this.setView} onSubmit={this.postNew} onChange={this.onChange} />
        );
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
        return <Welcome pageSwitch={this.setView} />;
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

  
  onChange(e) {
    const changed = e.target.id;
    const info = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, [changed]: info
      }
    }));
  }
  
  postNew(e) {
    e.preventDefault();
    this.saveUser(this.state.newUser);
  }

  validateLog(e) {
    e.preventDefault();
    const { name, password } = this.state.newUser
    axios.post('http://localhost:3001/users/login', { name, password }).then(resp => this.setState({
      token: resp.data.token,
      loggedIn: true,
    }));
  }
  
  buildHeaders() {
    const { token } = this.state;
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
  }

  async getCurrentUser() {
    try {
      const headers = this.buildHeaders();
      const resp = await axios.get('http://localhost:3001/users/currentuser', { ...headers });
      this.setState({
        loggedIn: true,
        currentUser: resp.data.user,
      });
    } catch(e) { 
      console.error(e) 
    }
  }

  async login(ev) {
    ev.preventDefault();
    const { username, password } = this.state.formData;
    const resp = await axios.post(
      `${BASE_URL}/login`,
      {username, password}
    );

    this.setState({token: resp.data.token})
    this.getCurrentUser();
  }

  async saveUser(user) {
    try {
      axios.post('http://localhost:3001/users/', user);
    // eslint-disable-next-line no-console
    } catch (e) { console.error(e); } finally { 
      this.setState({
        view: 'loggedin',
        newUser: { name: '', password: '' },
      });
    }
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
