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

app.get('/users/', async (req, res) => {
  try {
    const user = await User.findAll();
    res.json({ user });
  } catch (e) {
    console.error(e);
  } finally {
    process.exit();
  }
});

app.post('/users/', async (req, res) => {
  try {
    const newUser = req.body;
    await User.create(newUser);
  } catch (e) {
    console.error(e);
  } finally {
    process.exit();
  }
});

app.listen(PORT, () => {
  console.log(`up and running on PORT ${PORT}`);
})
