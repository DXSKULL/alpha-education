const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Маршрут для получения информации о книге по ISBN
app.get("/books/:isbn", async (req, res) => {
  const { isbn } = req.params;
  const apiUrl = `https://api.itbook.store/1.0/books/${isbn}`;

  try {
    const response = await axios.get(apiUrl);
    const bookData = response.data;

    // Проверка, существует ли книга
    if (!bookData.title) {
      throw new Error("Книга не найдена");
    }

    // Возвращаем только нужные поля
    const filteredData = {
      title: bookData.title,
      subtitle: bookData.subtitle,
      authors: bookData.authors,
      price: bookData.price,
      rating: bookData.rating,
    };

    res.json(filteredData);
  } catch (error) {
    res.status(500).json({
      error: error.message || "Ошибка при получении данных",
    });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
