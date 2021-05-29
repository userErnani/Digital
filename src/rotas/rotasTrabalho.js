const express = require('express');
const router = express()

router.get('/digital', (req, res) => {res.render('../src/templates/index')})



module.exports = router