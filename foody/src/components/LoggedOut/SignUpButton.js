import React from 'react';
import { Button } from 'reactstrap';


export default function SignUpButton(props){
  return(
    <button onClick = {() => props.pageSwitch('signup')} color="secondary" size="sm">Sign Up</button>
  )
}
