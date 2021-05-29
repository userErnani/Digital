require('dotenv').config()

const PORTA = process.env.PORTA

const express = require('express')
      app = express()
      userRouter = require('./rotas/usandoRotas')
      bodyParser = require('body-parser')
      path = require('path')
      methodOverride = require('method-override')

app.use(methodOverride('_method')) 
      
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'templates'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public', express.static('./srv/public'))

app.use('/', express.json(), userRouter)



app.listen(PORTA, console.log(`Servindo na porta ${PORTA}`))  