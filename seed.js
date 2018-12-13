const { Recipe, User, Favorite } = require('./models');
const { Op } = require('sequelize');

async function createRecipe() {
  await Recipe.destroy({ where: {} });
  try {
    const recipe = await Recipe.bulkCreate([
      {
        url: 'https://www.youtube.com/watch?v=aafmrrx7Bh4',
        videoid:'aafmrrx7Bh4',
        title: 'Traditional Shoyu Ramen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: null,
        rating: 4
      },
      {
        url: 'https://www.youtube.com/watch?v=4zw4FJVcjhw',
        videoid:'4zw4FJVcjhw',
        title: 'Breakfast Egg Bites',
        description: 'A great breakfast for on the go!',
        category: '',
        rating: 2
      },
      {
        url: 'https://www.youtube.com/watch?v=jfUpWuuO9_g',
        videoid:'jfUpWuuO9_g',
        title: 'Vegetable Rice Recipe',
        description: 'Delicious.',
        category: 'Vegan',
        rating: 3
      },
      {
        url: 'https://www.youtube.com/watch?v=r1ZLSbQ0r0I',
        videoid:'r1ZLSbQ0r0I',
        title: 'French Toast',
        description: "Learn how Crouton Crackerjacks makes simple yet delicious french toast! There is nothing fancy here because simple is better with this. About the best french toast you'll have anywhere!",
        category: 'Vegetarian',
        rating: 5
      },
      {
        url: 'https://www.youtube.com/watch?v=VRSuK1_vlBw',
        videoid:'VRSuK1_vlBw',
        title: 'Spinach Artichoke Stuffed Garlic Bread',
        description: 'An easy way to combine dip and bread into an all-inclusive appetizer!',
        category: 'Vegetarian',
        rating: 5
      },
      {
        url: 'https://www.youtube.com/watch?v=tvtXoG_Re7s',
        videoid:'tvtXoG_Re7s',
        title: 'Vegetarian Quesadillas',
        description: "Easy & delicious",
        category: 'Vegetarian',
        rating: 5

      },
      {
        url: 'https://www.youtube.com/watch?v=E4MTyvNp7MQ',
        videoid:'E4MTyvNp7MQ',
        title: 'Vegan  Mac & Cheese',
        description: 'Delicious Soul Food',
        category: 'Vegan',
        rating: 5

      },
      {
        url: 'https://www.youtube.com/watch?v=Ywd6fvDyVyQ',
        videoid:'Ywd6fvDyVyQ',
        title: 'Loaded Cheese Stuffed Mashed Potato Balls',
        description: 'Enjoy!',
        category: '',
        rating: 5
      },
      {
        url: 'https://www.youtube.com/watch?v=N1wAkkstSUY',
        videoid:'N1wAkkstSUY',
        title: 'Mini Chicken Pot Pies',
        description: 'Quicky & Easy',
        category: '',
        rating: 5
      }
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
