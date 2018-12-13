import React from 'react';
import LoginButton from './LoggedOut/LoginButton.js'
import SignUpButton from './LoggedOut/SignUpButton.js'

export default function Welcome(props){
  return (
    <div>
      <h1> Welcome to Foody </h1>
      <LoginButton  pageSwitch = {props.pageSwitch}/>
      <SignUpButton pageSwitch = {props.pageSwitch}/>
    </div>
  )
}
