const express = require('express')
const bodyParser = require('body-parser');

const { User } = require('../models');

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
    const thisUser = await userRouter.findByPk(req.params.id)
    res.json(thisUser)
  }catch (e){
    console.log(e);
    res.status(500).json({message: e.message})
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
}
