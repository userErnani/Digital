require('dotenv').config()
const express = require('express');
const router = express()
const sendEmail = require('../controlers/email')


router.get('/digital', (req, res) => {res.render('../src/templates/digital')})

router.get('/teste', (req, res) => {res.render('../src/templates/teste')})

router.post('/digital', sendEmail.teste)

router.post('/teste', sendEmail.teste)


module.exports = router