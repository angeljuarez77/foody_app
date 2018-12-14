import React from 'react';
import LoginButton from './LoggedOut/LoginButton.js'
import SignUpButton from './LoggedOut/SignUpButton.js'


export default function Welcome(props) {
  return (
    <div>
      <div className="loginSignup">
        <LoginButton  pageSwitch = {props.pageSwitch} />
        <SignUpButton pageSwitch = {props.pageSwitch} />
      </div>
      <div id="welcome-container">
        <h1> Welcome <br />to<br />Foody</h1>
      </div>
    </div>
  )
}
