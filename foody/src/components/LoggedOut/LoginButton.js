import React from 'react';

export default function LoginButton(props){
  return(
    <button onClick={ () => props.pageSwitch('login')}> Login </button>
  )
}
