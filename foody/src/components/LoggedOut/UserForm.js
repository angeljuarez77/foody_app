import React from 'react';

export default function UserForm(props) {
  return(
    <div>
      <form className='login-signup-form'>
        <label className='login-signup-label' id='username-form-label'>
          Username
          <input/>
        </label>
        <label className='login-signup-label' id='password-form-label'>
          Password
          <input/>
        </label>
      </form>
      <button className='submit-button' id='login-signup-submit'>Submit</button>
    </div>
  )
}
