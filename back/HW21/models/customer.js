'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  });

  Customer.associate = function(models) {
    Customer.hasMany(models.Order, { foreignKey: 'customerId' });
  };

  return Customer;
};
