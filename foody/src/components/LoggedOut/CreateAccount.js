import React from 'react';
import UserForm from './UserForm.js';
import LoginButton from './LoginButton';


export default function CreateAccount(props){
  return(
    <div>
      <h1> Create User Account </h1>
      <UserForm />
      <LoginButton  pageSwitch ={props.pageSwitch}/>
    </div>
  )
}
