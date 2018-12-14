import React from 'react';
import LoginButton from './LoggedOut/LoginButton.js'
import SignUpButton from './LoggedOut/SignUpButton.js'


export default function Welcome(props) {
  return (
    <div>
      <div id="welcome-container">
        <h2 id="welcome-text"> Welcome to </h2>
        <h1 id="foody-text">Foody</h1>
        <div className="loginSignup">
          <LoginButton  pageSwitch = {props.pageSwitch} />
          <SignUpButton pageSwitch = {props.pageSwitch} />
        </div>
      </div>
    </div>
  )
}
