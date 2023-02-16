import { Router } from 'express'
import { suma, resta, multiplicacion, division, lista } from '../controllers/operaciones.js'
import { auth } from '../middleware/auth.js'

const router = Router()

router.get('/suma', suma)
router.get('/resta', resta)
router.get('/multiplicacion', multiplicacion)
router.get('/division', division)
router.get('/lista', auth, lista)

export default router