import React from 'react';
import UserForm from './UserForm.js';
import LoginButton from './LoginButton';

export default function CreateAccount(props){
  return(
    <div>
      <h1> Create User Account </h1>
      <form onSubmit={props.makeUser}>
        Username: <input type="text" onChange={props.onChange} id="name"></input>
        Password: <input type="text" onChange={props.onChange} id="password"></input>
        <input type="submit" value="Create New Account!!!"></input>
      </form>
      <LoginButton  pageSwitch = {props.pageSwitch}/>
    </div>
  )
}
