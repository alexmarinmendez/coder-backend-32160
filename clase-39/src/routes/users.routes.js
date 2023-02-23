import { Router } from 'express'
import { getHTMLOnWire, postHTMLOnWire } from '../controllers/users.controller.js'

const router = Router()

router.get('/html-onwire', getHTMLOnWire)
router.post('/html-onwire', postHTMLOnWire)

export default router