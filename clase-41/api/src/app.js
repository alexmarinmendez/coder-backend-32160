import express from 'express'
import userRouter from './routes/users.js'

const app = express()
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Serve up on ${PORT}`))

app.use(express.json())
app.use('/users', userRouter)