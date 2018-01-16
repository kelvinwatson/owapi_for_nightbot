const express = require('express')
const path = require('path')
const request = require('request');
const PORT = process.env.PORT || 5000
const BASE_OWAPI_URI = 'https://owapi.net/api/v3/u/'
const GIT_URI = 'https://github.com/kelvinwatson/owapi_for_nightbot';

express()

  .get('/:battleTag/:region/comprank', (req, res) => {
    const battleTag = req.params.battleTag;
    const region = req.params.region;

    request({
        uri: BASE_OWAPI_URI + battleTag + '/stats',
        headers: {
          'User-Agent': 'owapifornightbot',
        },
      },
      (err, resp, body) => {
        if (!err){
          const rb = JSON.parse(body);
          const rank = rb[region].stats.competitive.overall_stats.comprank;
          res.json(rank);
        } else {
          res.json(err);
        }
      })
    })

  .get('/', (req, res) => {
    res.redirect(GIT_URI);
  })

  .listen(PORT, () => console.log(`OWAPIForNightbot listening on ${ PORT }`))
