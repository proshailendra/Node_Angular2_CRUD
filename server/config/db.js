const Sequelize = require("sequelize");

const sequelize = new Sequelize('Angular2_Node', 'sa', 'dotnettricks', {
    host: 'localhost',
    port: '1434', // find the port number
    dialect: 'mssql',
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log(`Unable to connect to the database: ${err}`);
    });

module.exports = sequelize;