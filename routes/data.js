var axios = require('axios/dist/node/axios.cjs');
var express = require('express');
var router = express.Router();
require('dotenv').config()

const apiKey = process.env.API_KEY;
const sport = 'aussierules_afl';
const region = 'au';

router.get('/games', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
