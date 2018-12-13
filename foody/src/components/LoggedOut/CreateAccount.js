import React from 'react';
import UserForm from './UserForm.js';
import LoginButton from './LoginButton';
import './LoggedOut.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default function CreateAccount(props) {
  return (
    <div class='logged-out-view' id='sign-up'>
      <h1> Create User Account </h1>

      <UserForm />
      <p> Already have an account? </p> <LoginButton  pageSwitch = {props.pageSwitch}/>
    </div>
  )
}
