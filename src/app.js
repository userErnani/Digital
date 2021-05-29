require('dotenv').config()

const PORTA = process.env.PORTA

const express = require('express')
const app = express()
const path = require('path')
const userRouter = require('./rotas/rotasTrabalho')

 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/public', express.static('./src/public'))

app.use('/', express.json(), userRouter)


app.listen(PORTA, console.log(`Trabalhando na porta ${PORTA}`))