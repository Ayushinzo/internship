import express from 'express'
import dotenv from 'dotenv'
import { feedbackModel } from '../schema/schema.js'
dotenv.config()

const feedbackRouter = express.Router()

feedbackRouter.post('/send', async (req, res) => {
    try {
        const { username, productName, title, description } = await req.body;
        if (!(username && productName && title && description)) {
            return res.json({
                success: false,
                message: "Please fill all fields"
            })
        }
        let feedback = feedbackModel({
            username,
            productName,
            title,
            description
        })
        let save = feedback.save()
        if (save) {
            return res.json({
                success: true,
                message: "Feedback sent"
            })
        }
        else {
            return res.json({
                success: false,
                message: "Could not send feedback"
            })
        }
    } catch (error) {
        return res.json({
            success: false,
            message: "Could not send feedback"
        })
    }
})

feedbackRouter.get('/get', async (req, res) => {
    try {
        const feedbacks = await feedbackModel.find({})
        return res.json({
            success: true,
            data: feedbacks.reverse()
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Could not fetch feedbacks"
        })
    }
})

export default feedbackRouter;