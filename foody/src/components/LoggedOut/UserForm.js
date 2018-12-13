import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function UserForm(props) {

  return (
  <div id='signup-login-form' >
    <Form>
      <FormGroup
        class='login-signup-form'
        onSubmit={props.onSubmit}
        onChange={props.onChange}>
      <Label
        for="exampleUserName"
        id='username-form-label'>
          Username:
      </Label>
      <Input
        type='text'
        id="name"
        placeholder="johnnyappleseed"
        />
      <Label
        id='password-form-label'>
          Password:
      </Label>
      <Input
        id="password"
          type="password"
          name="password"
          placeholder="adfiwe2n!ke"
        />
      </FormGroup>
      <Button
        id='login-signup-submit'
        type="submit"
        value="Submit"
        color="success"
        > Submit </Button>
    </Form>
  </div>
  )
}
