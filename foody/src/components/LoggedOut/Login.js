import React from 'react';
import UserForm from './UserForm.js';

import SignUpButton from './SignUpButton';

export default function Login(props) {
  return (
    <div>
      <UserForm onSubmit={props.onSubmit} onChange={props.onChange} />
      <SignUpButton pageSwitch = {props.pageSwitch}/>
    </div>
  );
}
