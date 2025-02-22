const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Настройка EJS
app.set("view engine", "ejs");

// Подключение статических файлов
app.use(express.static("public"));

// Главная страница
app.get("/", (req, res) => {
  res.render("pages/home");
});

// Страница со списком книг
app.get("/books", async (req, res) => {
  try {
    const response = await axios.get("https://api.itbook.store/1.0/new");
    const books = response.data.books;

    res.render("pages/books", { books });
  } catch (error) {
    res.status(500).send("Ошибка при загрузке списка книг");
  }
});

// Страница с деталями книги (динамический параметр)
app.get("/books/:isbn", async (req, res) => {
  const { isbn } = req.params;
  try {
    const response = await axios.get(`https://api.itbook.store/1.0/books/${isbn}`);
    const book = response.data;

    res.render("pages/book-details", { book });
  } catch (error) {
    res.status(500).send("Ошибка при загрузке книги");
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
