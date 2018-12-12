import React from 'react';

export default function UserForm(props){
  return(
    <div>
      <form>
        <label>
          Username:
          <input type="text"/>
        </label>
        <label>
          Password:
          <input />
        </label>
      </form>
      <input type="submit" value="Submit"></input>
    </div>
  )
}
