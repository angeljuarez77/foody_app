import React from 'react';
import UserForm from './UserForm.js';
import './LoggedOut.css';

import SignUpButton from './SignUpButton';
export default function Login(props) {
  return (
    <div className="logged-out-view">
    <h2 id='login-title'> Login </h2>
      <UserForm onSubmit={props.onSubmit} onChange={props.onChange} />
      <div className="other-page">
        <p> Don't have an account? </p> <SignUpButton pageSwitch = {props.pageSwitch}/>
      </div>
    </div>
  );
}
