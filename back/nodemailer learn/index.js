import express from "express"
import nodemailer from "nodemailer"
import fs from "fs"
import "dotenv/config"
import { fileURLToPath } from "url"
import path from "path"
import ejs from "ejs"

const app = express()
const PORT = 8080

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.set("view engine", "ejs")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})

app.get("/",  (req, res) => {
    res.send("safklfl")
})

app.post("/send", async (req, res) => {
    try {
        const {email, subject} = req.body

        if (!email || !subject) {
            throw new Error("Fill all the fields!")
        }

        const randomCode = Math.round(Math.random() * 999999)
        const template = fs.readFileSync(path.join(__dirname, "views", "email.ejs"), "utf-8");
        const emailHtml = ejs.render(template, {username: email, code: randomCode})

        await transporter.sendMail({
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: subject, 
            html: emailHtml
        })
        
        res.json({
            message: "Email sent!"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

app.listen(PORT, () => {
    console.log("http://localhost:8080");
})