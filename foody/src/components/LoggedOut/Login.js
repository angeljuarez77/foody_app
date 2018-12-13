import React from 'react';
import UserForm from './UserForm.js';
import './LoggedOut.css'

import SignUpButton from './SignUpButton';


export default function Login(props){
  return(
    <div class='logged-out-view' id='login'>
      <h1> Login </h1>
      <UserForm />
        <p> Don't have an account? </p><SignUpButton pageSwitch = {props.pageSwitch}/>
    </div>
  )
}
