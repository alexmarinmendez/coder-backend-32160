const express = require('express')
const appRoute = require('./routes')
const app = express()

app.use(express.json())
app.use('/api', appRoute)
app.listen(8080, () => console.log('Server Up!'))