'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    customerId: DataTypes.INTEGER
  });

  Order.associate = function(models) {
    Order.belongsTo(models.Customer, { foreignKey: 'customerId' });
    Order.belongsToMany(models.Product, { through: models.OrderProduct, foreignKey: 'orderId' });
  };

  return Order;
};
