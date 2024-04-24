const { Sequelize } = require('sequelize');
const env=require('dotenv')
env.config();

const sequelize = new Sequelize('tnplab10', 'postgres', '12345', {
    host: process.env.HOST,
    logging: false,
    dialect: process.env.DIALECT
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize