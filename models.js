const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'foody_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Recipe = sequelize.define('recipe', {
    url : Sequelize.STRING,
    title : Sequelize.STRING,
    description : Sequelize.STRING,
    category : Sequelize.STRING,
    rating : Sequelize.INTEGER
});

const User = sequelize.define('user', {
    name : Sequelize.STRING,
    password : Sequelize.STRING,
    fav_id : Sequelize.INTEGER
});

const Favorite = sequelize.define('favorite', {
    recipe_id : Sequelize.INTEGER,
    user_id : Sequelize.INTEGER
});

module.exports = {
    sequelize,
    Recipe,
    User,
    Favorite
}