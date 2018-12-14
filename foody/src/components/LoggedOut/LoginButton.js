import React from 'react';
import { Button } from 'reactstrap';
import './LoggedOut.css';

export default function LoginButton(props) {
  return(
    <Button onClick={ () => props.pageSwitch('login')} color="secondary" size="sm" className="loggedoutview-button"> Login </Button>
  )
}
