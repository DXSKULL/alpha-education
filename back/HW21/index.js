const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('./models');

const app = express();
app.use(express.json());
app.use(cors());

// 🚀 Маршруты для клиентов
app.get('/customers', async (req, res) => {
  try {
    const customers = await db.Customer.findAll({ include: db.Order });
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/customers', async (req, res) => {
  try {
    const customer = await db.Customer.create(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🚀 Маршруты для заказов
app.get('/orders', async (req, res) => {
  try {
    const orders = await db.Order.findAll({ include: [db.Customer, db.Product] });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/orders', async (req, res) => {
  try {
    const order = await db.Order.create({ customerId: req.body.customerId });

    if (req.body.productIds && req.body.productIds.length > 0) {
      await order.setProducts(req.body.productIds);
    }

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🚀 Маршруты для товаров
app.get('/products', async (req, res) => {
  try {
    const products = await db.Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/products', async (req, res) => {
  try {
    const product = await db.Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🚀 Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
  await db.sequelize.sync(); // Синхронизация базы
});
