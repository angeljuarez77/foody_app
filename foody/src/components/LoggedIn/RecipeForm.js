import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './LoggedIn.css'
export default function RecipeForm(props) {
  return (
    <div id="recipe-form">

      <Form
        onSubmit={props.submitRecipe}
        id="add-recipe-form">
          <h5> Add Recipe </h5>
          <FormGroup>

        <Label className="add-recipe-label">Youtube Link ID</Label>
        <Input
          type="text"
          name="vidId"
          value={props.recipeForm.vidId}
          onChange={props.handleChange}
          placeholder="/qorkD6nPYQM"
          className='add-recipe-input'
        />

        <Label className="add-recipe-label"> Title </Label>
        <Input
          type="text"
          name="title"
          value={props.recipeForm.title}
          onChange={props.handleChange}
          placeholder="Title"
          className='add-recipe-input'
        />
        <Label className="add-recipe-label"> Description </Label>
        <Input
          type="text"
          name="description"
          value={props.recipeForm.description}
          onChange={props.handleChange}
          placeholder="Description"
          className='add-recipe-input'
        />
        <Label className="add-recipe-label"> Category </Label>
        <Input
          type="select"
          name="category"
          onChange={props.handleChange}
          className='add-recipe-select'>
          <option defaultValue disabled selected value>Category</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
        </Input>
        <Label className="add-recipe-label"> Rating </Label>
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
