import express from 'express'
import operacionesRoutes from './routes/operaciones.js'

const app = express()

app.use('/operaciones', operacionesRoutes)

const PORT = 8080
app.listen(PORT, () => console.log('Server Up!'))
