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

//
// favoriteRouter.get('/:id', async (req, res) => {
//   const favorite = await Favorite.findAll({where: {id:req.params.id}})
// })
//How to include another model in query.
module.exports = {
  recipeRouter
}
