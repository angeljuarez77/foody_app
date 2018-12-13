import React from 'react';

export default function RecipeForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="url"
          value={props.url}
          onChange={props.handleChange}
          placeholder="Video url"
        />
        <input
          type="text"
          name="title"
          value={props.title}
          onChange={props.handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="description"
          value={props.description}
          onChange={props.handleChange}
          placeholder="Description"
        />
        <select name="category" onChange={props.categoryResults}>
          <option defaultValue value={null}>Category</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
        <select name="category" onChange={props.categoryResults}>
          <option defaultValue value={null}>Rating</option>
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
          <option value={1}>1</option>
        </select>
        <button>Post Recipe</button>
      </form>
    </div>
  );
}
