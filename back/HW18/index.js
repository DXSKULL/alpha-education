import axios from "axios"
import express from "express"
import { fetchBlogs } from "./services/blogService.js"

const app = express()
app.use(express.json())

const PORT = "8080"

app.get("/blog/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { user_id, title, description, category } = await fetchBlogs(id)

        const userResponse = await axios.get(`https://api.slingacademy.com/v1/sample-data/users/${user_id}`)

        res.json({
            blog: {
                user_id: user_id,
                title: title,
                description: description,
                category: category
            },
            user: {
                firstName: userResponse.data.user.first_name,
                lastName: userResponse.data.user.last_name
            }

        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})