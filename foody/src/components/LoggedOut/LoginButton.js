import React from 'react';
import { Button } from 'reactstrap';

export default function LoginButton(props) {
  return(
    <button onClick={ () => props.pageSwitch('login')} className="logbtns"> Login </button>
  )
}
