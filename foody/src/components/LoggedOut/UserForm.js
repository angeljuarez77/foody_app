import React from 'react';

export default function UserForm(props){
  return(
    <div>
      <h2> Form </h2>
      <form class='login-signup-form'>
        <label class='login-signup-label' id='username-form-label'>
          Username
          <input/>
        </label>
        <label class='login-signup-label' id='password-form-label'>
          Password
          <input/>
        </label>
      </form>
      <button class='submit-button' id='login-signup-submit'>Submit</button>
    </div>
  )
}
