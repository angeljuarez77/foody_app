// taken from a random repo that you gave us
const { sequelize } = require('./models');

async function resetDb() {
  try {
    await sequelize.sync({ force: true });
    // eslint-disable-next-line no-console
    console.log('database sync\'d');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  } finally {
    process.exit();
  }
}

resetDb();
