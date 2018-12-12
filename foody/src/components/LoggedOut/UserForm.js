import React from 'react';

export default function UserForm(props){
  return(
    <div>
      <h2> Form </h2>
      <form>
        <label>
          Username
          <input/>
        </label>
        <label>
          Password
          <input/>
        </label>
      </form>
      <button>Submit</button>
    </div>
  )
}
