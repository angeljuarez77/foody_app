const { Recipe, User, Favorite } = require('./models');
const { Op } = require('sequelize');

async function createRecipe() {
  await Recipe.destroy({ where: {} });
  try {
    const recipe = await Recipe.bulkCreate([
      {
        url: 'https://www.youtube.com/watch?v=aafmrrx7Bh4',
        title: 'Traditional Shoyu Ramen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: null,
        rating: 4
      },
      {
        url: 'https://www.youtube.com/watch?v=4zw4FJVcjhw',
        title: 'Breakfast Egg Bites',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: null,
        rating: 2
      },
      {
        url: 'https://www.youtube.com/watch?v=jfUpWuuO9_g',
        title: 'Vegetable Rice Recipe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'vegan',
        rating: 3
      },
      {
        url: 'https://www.youtube.com/watch?v=r1ZLSbQ0r0I',
        title: 'French Toast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: null,
        rating: 5
      },
    ]);
  } catch(e) {
    console.log(e);
  }
}

async function createUser() {
  await User.destroy({ where: {} });
  try {
    const user = await User.bulkCreate([
      {
        name: 'Leonidas',
        password: 'abcdefgangsta',
      },
      {
        name: 'Chef Ramsey',
        password: 'cookingislife',
      },
      {
        name: 'Some guy',
        password: 'imhungry',
      },
    ]);
  } catch(e) {
    console.log(e);
  }
}

async function addFavorite() {
  try {
    const recipes = await Recipe.findAll();
    const users = await User.findAll();
    await Promise.all(users.map(async user => {
      await user.addRecipe(recipes[Math.floor(Math.random() * recipes.length)]);
    }));

  } catch(e) {
    console.log(e);
  }
}

async function run() {
  try {
    await createRecipe();
    await createUser();
    await addFavorite();
  } catch (e) {
    console.log(e);
  } finally {
    process.exit();
  }
}


run();
