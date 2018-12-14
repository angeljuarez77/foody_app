import React from 'react';
import { Button } from 'reactstrap';

export default function LoginButton(props) {
  return(

    <Button onClick={ () => props.pageSwitch('login')} color="secondary" size="sm"> Login </Button>

  )
}
