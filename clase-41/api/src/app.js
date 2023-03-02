import express from 'express'
import userRouter from './routes/users.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Serve up on ${PORT}`))

const opciones = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
}

app.use(express.json())
app.use(cors(opciones))
app.use('/users', userRouter)