import express from 'express'
import handlebars from 'express-handlebars'
import usersRouter from './routes/users.routes.js'

//__dirname
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/users', usersRouter)

//setear el motor de plantillas
app.engine('hbs', handlebars.engine({extname: 'hbs', defaultLayout: 'index.hbs'}))
app.set('views', __dirname+'/views')
app.set('view engine', 'hbs')

app.listen(8080, () => console.log('Server Up'))
