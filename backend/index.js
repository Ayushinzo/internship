import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectdb from './database/connectdb.js'
import authRouter from './routes/auth.js'
import feedbackRouter from './routes/feedback.js'
dotenv.config()

let app = express()

app.use(cors({
    origin: [process.env.FRONTEND_URL]
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/auth', authRouter)
app.use('/feedback', feedbackRouter)

//Connect to database
connectdb()

app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})