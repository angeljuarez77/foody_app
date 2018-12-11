const express = require('express')
const bodyParser = require('body-parser');

const { Recipe } = require('../models');

const recipeRouter = express();

recipeRouter.use((req, res, next) =>{
  console.log('using favorite Router');
  next();
})

recipeRouter.get('/', async (req, res) => {
  try{
    const recipes = await Recipe.findAll();
    res.json(recipes);
  }catch(e){
    console.log(e);
    res.status(500).json({message: e.message});
  }
})

recipeRouter.get('/:id', async (req, res) => {
  try{
    const thisRecipe = await Recipe.findByPk(req.params.id)
    res.json(thisRecipe)
  }catch(e){
    console.log(e);
    res.status(500).json({message: e.message})
  }
});

recipeRouter.post('/', async (req, res) => {
  try{
    const newRecipe = await Recipe.create(req.body);
    res.json(newRecipe);
  }catch(e){
  console.error(e);
  res.status(500).json({message:e.message})
  }
})

recipeRouter.delete('/:id', async (req, res) => {
  try{
    const deleteThis = await Recipe.destroy({where: {id: req.params.id}});
    res.json(deleteThis)
  }catch(e){
    console.error(e);
    res.status(500).json({message:e.message});
  }
})


recipeRouter.put('/:id', async (req, res) => {
  try{
    const info = req.body;
    const recipe = await Recipe.findByPk(req.params.id);
    recipe.update(info);
    res.json(recipe);
  }catch(e) {
    console.error(e);
    res.status(500).json({message: e.message})
  }
});

//
// favoriteRouter.get('/:id', async (req, res) => {
//   const favorite = await Favorite.findAll({where: {id:req.params.id}})
// })
//How to include another model in query.
module.exports = {
  recipeRouter
}
