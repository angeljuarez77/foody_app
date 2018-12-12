const express = require('express');
const { passport, sign } = require('../auth');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { Recipe } = require('../models');

const userRouter = express();

userRouter.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('using user Router');
  next();
});

userRouter.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.status(500).json({ message: e.message });
  }
});

userRouter.get('/:id', async (req, res) => {
  try {
    const thisUser = await User.findByPk(req.params.id);
    res.json(thisUser);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.status(500).json({ message: e.message });
  }
});

userRouter.get('/:id/favorites', async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      include: [{
        model: User,
        attributes: [],
        where: { id: req.params.id },
      }],
    });
    res.json(recipe);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.status(500).json({ message: e.message });
  }
});

userRouter.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const { id, name } = newUser.dataValues;
    const token = sign({
      id,
      name,
    });
    res.json({ newUser, token });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.find({ where: { name } });
    const passwordValid = await bcrypt.compare(password, user.password);
    const { id } = user;
    if (passwordValid) {
      const token = sign({
        id,
        name,
      });
      res.json({ token });
    } else {
      throw Error('Invalid credentials');
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.status(500).json({ message: e.message });
  }
});

userRouter.get('/currentuser', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ msg: 'logged in', user: req.user });
});

userRouter.delete('/:id', async (req, res) => {
  try {
    const deleteThis = await User.destroy({ where: { id: req.params.id } });
    res.json(deleteThis);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

userRouter.put('/:id', async (req, res) => {
  try {
    const info = req.body;
    const user = await User.findByPk(req.params.id);
    user.update(info);
    res.json(user);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});


// userRouter.get('/:id', async (req, res) => {
//   try{
//     const thisUser = await useRouter.findByPk(req.params.id)
//     res.json(thisUser)
//   }catch(e){
//     console.log(e);
//     res.status(500).json({message: e.message})
//   }
// });

module.exports = {
  userRouter,
};
