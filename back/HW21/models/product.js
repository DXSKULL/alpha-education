'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  });

  Product.associate = function(models) {
    Product.belongsToMany(models.Order, { through: models.OrderProduct, foreignKey: 'productId' });
  };

  return Product;
};
