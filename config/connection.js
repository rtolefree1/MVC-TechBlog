const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// JAWSDB is a one-click delivery and management of a relational database in the cloud - hosting, configuring, patching and managing a database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;