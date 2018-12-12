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
      user:[],
      view:''
    }
  }

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
      return <LoggedInView />
    default:
      return <Welcome pageSwitch={this.setView}/>
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
