'use strict';

const express = require('express');
const router = express.Router();
const pg = require('pg');
const jwt = require('express-jwt');
const config = require('../config/config');
const jwtCheck = jwt({
  secret: new Buffer(config.auth0.AUTH0_CLIENT_SECRET, 'base64'),
  audience: config.auth0.AUTH0_CLIENT_ID,
});
pg.defaults.poolSize = 25;

// console.log(config);
/* GET users listing. */
const users = require('./controllers/users');
const category = require('./controllers/category');

router.use('/', category);
router.use('/', jwtCheck, users);
module.exports = router;
