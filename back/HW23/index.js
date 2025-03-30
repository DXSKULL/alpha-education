require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { body } = require('express-validator');
const validateRequest = require('./middleware/validationMiddleware');
const app = express();
app.use(express.json());
app.use(cors());

const User = require('./models/User');
const Post = require('./models/Post');

// 🚀 Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// 🚀 Маршруты для пользователей
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post(
  '/users',
  [
    body('name').isString().notEmpty().withMessage('Имя обязательно'),
    body('email').isEmail().withMessage('Некорректный email')
  ],
  validateRequest,
  async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
);

// 🚀 Маршруты для постов
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().populate('author');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post(
  '/posts',
  [
    body('title').isString().notEmpty().withMessage('Заголовок обязателен'),
    body('content').isString().notEmpty().withMessage('Содержимое обязательно'),
    body('author').isMongoId().withMessage('Некорректный ID автора')
  ],
  validateRequest,
  async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
);


// 🚀 Добавление комментария к посту
app.post(
  '/posts/:id/comments',
  [
    body('body').isString().notEmpty().withMessage('Комментарий не может быть пустым')
  ],
  validateRequest,
  async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) throw new Error('Пост не найден');

      post.comments.push({ body: req.body.body });
      await post.save();
      res.json(post);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
);


// 🚀 Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
