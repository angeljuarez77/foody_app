import React from 'react';



export default function SignUpButton(props){
  return(
    <button onClick = {() => props.pageSwitch('signup')}>Sign Up</button>
  )
}
