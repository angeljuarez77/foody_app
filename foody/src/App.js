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
      view: 'welcome',
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
              category: 'None'
            }
        ],
      selected: 'Vegetarian'
    }
  }



getView(){
  const view = this.state.view;
  switch (view) {
    case 'login':
      return <Login />
    case 'signup':
      return <CreateAccount />
    case 'loggedin':
      return <LoggedInView />
    default:
      return <Welcome />
  }
}

  render() {
    return (
      <div className="App">
      <AllRecipes recipes={this.state.recipes} selected={this.state.selected} />
      {this.getView()}

      </div>
    );
  }
}

export default App;
