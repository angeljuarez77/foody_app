const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;


const { User, Recipe } = require('./models');

const {userRouter } = require('./routes/users');
const {recipeRouter } = require('./routes/recipes');


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json())
app.use('/recipes', recipeRouter);
app.use('/users', userRouter);


app.listen(PORT, () => {
  console.log(`up and running on PORT ${PORT}`);
})
