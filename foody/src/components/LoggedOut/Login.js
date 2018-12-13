import React from 'react';
import UserForm from './UserForm.js';

import SignUpButton from './SignUpButton';


export default function Login(props){
  return(
    <div>
      <h1> Login </h1>
      <UserForm />
      <SignUpButton pageSwitch ={props.pageSwitch}/>
    </div>
  )
}
