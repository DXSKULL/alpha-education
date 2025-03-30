const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../controllers/userController');
const validateRequest = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post(
  '/register',
  [
    body('name').isString().notEmpty().withMessage('Имя обязательно'),
    body('email').isEmail().withMessage('Некорректный email'),
    body('password').isLength({ min: 6 }).withMessage('Пароль должен содержать минимум 6 символов')
  ],
  validateRequest,
  register
);

router.post('/login', login);

module.exports = router;
