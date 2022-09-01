import express from 'express'
import { register, login, getUser } from '../controllers/auth.controller'
const router = express.Router()

router.get("/", getUser)

router.post("/register", register)

router.post("/login", login)

module.exports = router