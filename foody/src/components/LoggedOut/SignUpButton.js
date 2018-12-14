import React from 'react';
import { Button } from 'reactstrap';
import './LoggedOut.css';

export default function SignUpButton(props){
  return(
    <Button onClick = {() => props.pageSwitch('signup')} color="secondary" size="sm" className="loggedoutview-button">Sign Up</Button>
  )
}
