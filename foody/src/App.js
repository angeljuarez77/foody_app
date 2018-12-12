import React, { Component } from 'react';
import LoggedInView from './components/LoggedIn/LoggedInView.js';
import Login from './components/LoggedOut/Login.js'
import CreateAccount from './components/LoggedOut/CreateAccount.js'
import Welcome from './components/Welcome.js'
import AllRecipes from './components/LoggedIn/AllRecipes.js';
import Recipe from './components/Recipe.js';
import axios from 'axios'

const BASE_URL = 'http://localhost:3001';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: [{
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
      newUser: {},
      favoritesView : false,
      categories : ['Vegan', 'Vegetarian'],
      selected: '',
      filterResults: [],
      favorites: false,
    }
    this.renderFavorites = this.renderFavorites.bind(this);
    this.getView = this.getView.bind(this);
    this.makeUser = this.makeUser.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit;
    this.formChangeNew = this.formChangeNew.bind(this);
  }

  async getRecipes() {
    const results = await axios.get(`${BASE_URL}/recipes`);
    const recipes = results.data
    this.setState({
      recipes:recipes
    })
  }

  async componentDidMount(){
    await this.getRecipes()
  }

  setView = (view) =>{
      this.setState({
        view:view
    });
  }


  getView(){
    const view = this.state.view;
    switch (view) {
      case 'login':
        return <Login pageSwitch={this.setView}/>
      case 'signup':
        return <CreateAccount pageSwitch={this.setView}/>
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
        return <Welcome pageSwitch={this.setView}/>
    }
  }

  handleSelect(filter){
    this.setState({
      selected: filter
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('register button pressed')
  }

  renderFavorites(nextView){
    this.setState({
      favoritesView: nextView
    })
  }

  makeUser(e){
    try {
      e.preventDefault();
      const user = this.state.newUser;
      axios.post('http://localhost:3001/users/', user);
      console.log(user);
    } catch (e) {console.error(e)}
    finally{
      this.setState({
        newUser: {
          
        }
      })
    }
  }

  formChangeNew(e){
    const changed = e.target.id;
    const info = e.target.value;
    this.setState(prevState => ({
      newUser : {
        ...prevState.newUser, [changed]:info
      }
    }));
  }

  render() {
    return (
      <div className="App">
        {/* {this.getView()} */}
        <CreateAccount 
        pageSwitch={this.setView}
        makeUser={this.makeUser}
        onChange={this.formChangeNew}
        />
      </div>
    );
  }
}

export default App;
