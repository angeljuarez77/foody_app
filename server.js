const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;


const { User, Recipe } = require('./models');

const { userRouter } = require('./routes/users');
const { recipeRouter } = require('./routes/recipes');


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/recipes', recipeRouter);
app.use('/users', userRouter);
// app.use('/users', favoriteRouter);
// I think this will only give us a favorite from all the users,
// not favorites from a particular user. is that what we want? 
// to get all videos that had been favorites by users?

// users/:id/fav


app.listen(PORT, () => {
  console.log(`up and running on PORT ${PORT}`);
});
