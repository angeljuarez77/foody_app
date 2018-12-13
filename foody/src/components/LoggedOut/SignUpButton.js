import React from 'react';



export default function SignUpButton(props){
  return(
    <button onClick = {() => props.pageSwitch('signup')} className="logbtns">Sign Up</button>
  )
}
