const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize({
  database: 'foody_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
  },
});

const Recipe = sequelize.define('recipe', {
  vidId: Sequelize.STRING,
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  rating: Sequelize.INTEGER,
});

const User = sequelize.define('user', {
  name: Sequelize.STRING,
  password: Sequelize.STRING,
});

User.beforeCreate( async (user, options) => {
  const password_digest = await bcrypt.hash(user.password, 10);
  user.password = password_digest;
});

Recipe.belongsToMany(User, { through: 'favorites' });
User.belongsToMany(Recipe, { through: 'favorites' });

module.exports = {
  sequelize,
  Recipe,
  User,
};
