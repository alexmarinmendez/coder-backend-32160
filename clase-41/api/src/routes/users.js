import express from 'express'
import userControllers from '../controllers/users.js'

const router = express.Router()

router.get('/', userControllers.getUsers)
router.post('/', userControllers.saveUser)

export default router