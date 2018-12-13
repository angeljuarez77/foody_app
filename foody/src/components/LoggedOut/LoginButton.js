import React from 'react';
import { Button } from 'reactstrap';

export default function LoginButton(props) {
  return(
<<<<<<< HEAD
    <button onClick={ () => props.pageSwitch('login')} className="logbtns"> Login </button>
=======
    <Button onClick={ () => props.pageSwitch('login')} color="secondary" size="sm"> Login </Button>
>>>>>>> master
  )
}
