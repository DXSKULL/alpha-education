import { quotes } from "../data/quotes.js";

export function getAllQuotes(req, res) {
    res.json({
        name: "Quotes",
        count: quotes.length,
        data: quotes
    })
}

export function getRandomQuote(req, res) {
    const randIndex = Math.floor(Math.random() * quotes.length)
    const randQuote = quotes[randIndex]

    res.json(randQuote)
}

export const addNewQuote = (req, res) => {
    const newQuote = {
        id: quotes.length + 1,
        text: req.body.text,
        author: req.body.author
    }

    quotes.push(newQuote)

    res.json({
        newQuote: newQuote,
        allQuotes: quotes
    })
}

export function updateQuote(req, res) {
    const { id } = req.params
    const { text, author } = req.body
    const quote = quotes.find(item => item.id === +id) // +id, так как параметры типа стринг

    if (!quote) {
        return res.status(404).json({
            message: "Quote not found"
        })
    }

    if (text) {
        quote.text = text
    }

    if (author) {
        quote.author = author
    }

    res.json({
        message: "Quote updated!",
        updatedQuote: quote,
        allQuotes: quotes
    })
}

export function deleteQuote(req, res) {
    const { id } = req.params
    const idx = quotes.findIndex(item => item.id === +id)

    if (idx === -1) {
        return res.status(404).json({
            message: "Quote not found!"
        })
    }

    const deletedQuote = quotes.splice(idx, 1)

    res.json({
        message: "Quote deleted!",
        deletedQuote: deletedQuote,
        allQuotes: quotes
    })
}