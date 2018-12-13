import React from 'react';
import { Button } from 'reactstrap';


export default function SignUpButton(props){
  return(
    <Button onClick={ () => props.pageSwitch('signup')} color="secondary" size="sm">Sign Up</Button>
  )
}
