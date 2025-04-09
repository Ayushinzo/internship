import mongoose from 'mongoose'

const register = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const feedback = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const registerModel = mongoose.models.register || mongoose.model('register', register);

const feedbackModel = mongoose.models.feedback || mongoose.model('feedback', feedback);

export { registerModel, feedbackModel };