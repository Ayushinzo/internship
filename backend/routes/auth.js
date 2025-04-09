import express from 'express';
import { registerModel } from '../schema/schema.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import validator from 'validator'
import bcrypt from 'bcrypt'
dotenv.config()

const authRouter = express.Router()

authRouter.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!(username && email && password)) {
            return res.json({
                success: false,
                message: "Please fill all fields"
            })
        }
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter the valid email"
            })
        }
        if (password.length <= 8) {
            return res.json({
                success: false,
                message: "Password must be at least 8 character long"
            })
        }
        let isExist = await registerModel.find({ email })
        if (isExist.length) {
            return res.json({
                success: false,
                message: "Email already exists"
            })
        }
        bcrypt.genSalt(10, (err, salt) => {
            if (!err) {
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (!err) {
                        let user = registerModel({
                            username: username,
                            email: email,
                            password: hash
                        })
                        await user.save()
                        let token = await jwt.sign({ username, email }, process.env.JWT_SECRET)
                        return res.json({
                            success: true,
                            message: "User registered",
                            token,
                            user: {
                                username,
                                email
                            }
                        })
                    }
                })
            }
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Unauthorized"
        })
    }
})

authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const isExist = await registerModel.findOne({ email })
        if (!isExist) {
            return res.json({
                success: false,
                message: "User does not exist"
            })
        }
        let isTrue = await bcrypt.compare(password, isExist.password)
        if (!isTrue) {
            return res.json({
                success: false,
                message: "Invalid credentials"
            })
        }
        let token = jwt.sign({ username: isExist.username, email: isExist.email }, process.env.JWT_SECRET);
        if (token) {
            return res.json({
                success: true,
                message: "Logged in successful",
                token,
                user: {
                    username: isExist.username,
                    email: isExist.email
                }
            })
        }
    } catch (error) {
        return res.json({
            success: false,
            message: "Unauthorized"
        })
    }
})

authRouter.get('/getUser', (req, res) => {
    try {
        let token = req.headers.authorization.split(' ')[1]
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        return res.json({
            success: true,
            decoded
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Unauthorized"
        })
    }
})

export default authRouter;