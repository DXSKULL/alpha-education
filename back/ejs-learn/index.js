import express from "express"
import axios from "axios"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
app.use(express.json())

const PORT = "8080"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        const {data} = await axios.get(`https://api.slingacademy.com/v1/sample-data/products`)
        
        res.render("products", {products: data.products})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.get("/products/:id", async (req, res) => {
    try {
        const {id} = req.params
        const {data} = await axios.get(`https://api.slingacademy.com/v1/sample-data/products/${id}`)
        
        res.render("product", {name: data.product.name, price: data.product.price, img: data.product.photo_url})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
