import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './LoggedIn.css'
export default function RecipeForm(props) {
  return (
    <div id="recipe-form">
    <h5> Add Recipe </h5>
      <Form
        onSubmit={props.submitRecipe}
        class='add-recipe-form'>
          <FormGroup>

        <Label>Youtube Link ID</Label>
        <Input
          type="text"
          name="vidId"
          value={props.recipeForm.vidId}
          onChange={props.handleChange}
          placeholder="/qorkD6nPYQM"
          class='add-recipe-input'
        />

        <Label> Title </Label>
        <Input
          type="text"
          name="title"
          value={props.recipeForm.title}
          onChange={props.handleChange}
          placeholder="Title"
          class='add-recipe-input'
        />
        <Label> Description </Label>
        <Input
          type="text"
          name="description"
          value={props.recipeForm.description}
          onChange={props.handleChange}
          placeholder="Description"
          class='add-recipe-input'
        />
        <Label> Category </Label>
        <Input
          type="select"
          name="category"
          onChange={props.handleChange}
          className='add-recipe-select'>
          <option defaultValue disabled selected value>Category</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
        </Input>
        <Label> Rating </Label>
        <Input
        type="select"
        name="rating"
        onChange={props.handleChange}>
          <option defaultValue disabled selected value>Rating</option>
          <option value='5'>5</option>
          <option value='4'>4</option>
          <option value='3'>3</option>
          <option value='2'>2</option>
          <option value='1'>1</option>
        </Input>
      </FormGroup>
      <Button class='submit-button' id='add-recipe-submit' outline color="info">Add Recipe</Button>
      </Form>
    </div>
  );
}
