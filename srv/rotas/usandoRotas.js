const express = require('express');
      rotas = express()
      controle = require('../controle/calculo');

rotas.get('/digital', (req, res) => {res.render('../srv/templates/digital')})

// rotas.post('/calcular', controle.calculo)
// rotas.get('/calcular', controle.calculo)

 
module.exports = rotas