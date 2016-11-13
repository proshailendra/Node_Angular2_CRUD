const Sequelize = require('sequelize'),
    sequelizeDb = require("../config/db");

const User = sequelizeDb.define('users', {
    UserId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: Sequelize.STRING, allowNull: false },
    Address: { type: Sequelize.STRING },
    ContactNo: { type: Sequelize.STRING },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = User;