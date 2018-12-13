import React from 'react';
import UserForm from './UserForm.js';
import './LoggedOut.css'

import SignUpButton from './SignUpButton';
export default function Login(props) {
  return (
    <div>
      <UserForm onSubmit={props.onSubmit} onChange={props.onChange} />
      <p> Don't have an account? </p> <SignUpButton pageSwitch = {props.pageSwitch}/>
    </div>
  );
}
