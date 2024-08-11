// backend/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase1', 'root', 'Dgkchbmp#', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
