import React from 'react';

export default function RecipeForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit} class='add-recipe-form'>
        <label>Youtube Link
        <input
          type="text"
          name="url"
          value={props.url}
          onChange={props.handleChange}
          placeholder="Video url"
          class='add-recipe-input'
        />
        </label>
        <label> Title
        <input
          type="text"
          name="title"
          value={props.title}
          onChange={props.handleChange}
          placeholder="Title"
          class='add-recipe-input'
        />
        </label>
        <input
          type="text"
          name="description"
          value={props.description}
          onChange={props.handleChange}
          placeholder="Description"
          class='add-recipe-input'
        />
        <select name="category" onChange={props.categoryResults} class='add-recipe-select'>
          <option defaultValue value={null}>Category</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
        // <select name="category" onChange={props.categoryResults}>
        //   <option defaultValue value={null}>Rating</option>
        //   <option value={5}>5</option>
        //   <option value={4}>4</option>
        //   <option value={3}>3</option>
        //   <option value={2}>2</option>
        //   <option value={1}>1</option>
        // </select>
        <button class='submit-button' id='add-recipe-submit'>Post Recipe</button>
      </form>
    </div>
  );
}
