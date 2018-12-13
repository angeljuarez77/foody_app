import React from 'react';

export default function UserForm(props) {
  return (
    <div>
      <form class='login-signup-form' onSubmit={props.onSubmit} onChange={props.onChange}>
        <label class='login-signup-label' id='username-form-label'>
          Username: 
          <input  id="name" placeholder="Name Please"/>
        </label>
        <label class='login-signup-label' id='password-form-label'>
          Password: 
          <input id="password" placeholder="Password"/>
        </label>
        <input class='submit-button' id='login-signup-submit' type="submit" value="Submit"></input>
      </form>
    </div>
  )
}
