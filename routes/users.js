const express = require('express');


const { User } = require('../models');
const { Recipe } = require('../models');

const userRouter = express();

userRouter.use((req, res, next) =>{
  console.log('using user Router');
  next();
})

userRouter.get('/', async (req, res) => {
  try{
    const users = await User.findAll();
    res.json(users);
  }catch(e){
    console.log(e);
    res.status(500).json({message: e.message});
  }
})

userRouter.get('/:id', async (req, res) => {
  try{
    const thisUser = await User.findByPk(req.params.id)
    res.json(thisUser)
  }catch (e){
    console.log(e);
    res.status(500).json({message: e.message})
  }
});

userRouter.get('/:id/favorites', async (req, res) => {
try {
  const recipe = await Recipe.findAll({
    include:[{
      model: User,
      attributes:[],
      where:{id: req.params.id}
    }]});
  res.json(recipe);
}
catch(e) {
  console.log(e);
  res.status(500).json({ message: e.message });
}
});

userRouter.post('/', async (req, res) => {
  try{
    const newUser = await User.create(req.body);
    res.json(newUser);
  }catch(e){
  console.error(e);
  res.status(500).json({message:e.message})
  }
});

  userRouter.delete('/:id', async (req, res) => {
    try{
      const deleteThis = await User.destroy({where: {id: req.params.id}});
      res.json(deleteThis)
    }catch(e){
      console.error(e);
      res.status(500).json({message:e.message});
    }
  })

  userRouter.put('/:id', async (req, res) => {
    try{
      const info = req.body;
      const user = await User.findByPk(req.params.id);
      user.update(info);
      res.json(user);
    }catch(e){
      console.error(e);
      res.status(500).json({message: e.message});
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
  userRouter
};
