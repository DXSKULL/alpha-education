import express from "express"
import { addNewQuote, deleteQuote, getAllQuotes, getRandomQuote, updateQuote } from "./controllers/quotes.controller.js";


const app = express()
const PORT = 4040;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("safsafas!")
})

app.get("/quotes", getAllQuotes)

app.get("/quotes/random", getRandomQuote)

app.post("/quotes", addNewQuote)

app.patch("/quotes/:id", updateQuote)

app.delete("/quotes/:id", deleteQuote)

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
})