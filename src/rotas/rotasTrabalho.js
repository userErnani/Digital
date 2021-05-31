require('dotenv').config()
const express = require('express');
const router = express()
const sendEmail = require('../controlers/email')


router.get('/digital', (req, res) => {res.render('../src/templates/index')})

router.post('/digital', sendEmail.teste)


module.exports = router