var axios = require('axios');
var express = require('express');
var querystring = require('node:querystring');
var router = express.Router();
require('dotenv').config()

const apiKey = process.env.API_KEY;
const region = 'au';
const now = new Date();
const nextWeek = new Date();
nextWeek.setDate(now.getDate() + 7);

const queryParams = {
  apiKey: apiKey,
  regions: region,
  bookmakers: 'sportsbet',
  commenceTimeFrom: formatDate(now),
  commenceTimeTo: formatDate(nextWeek),
}


/**
 * data {
 * [...]
 *  bookmakers {
 *  [...]
 *    markets {
 *      outcomes: [...]
 *    }
 *  }
 * }
 */

axios.get('https://api.the-odds-api.com/v4/sports/aussierules_afl/odds/?' + querystring.stringify(queryParams))
  .then(response => {
    console.log(response.data[0].bookmakers[0].markets[0].outcomes)
  });

function formatDate(date) {
  return date.toISOString().split('.')[0] + 'Z';
}