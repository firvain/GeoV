'use strict';

const express = require('express');
const router = express.Router();
const pg = require('pg');
pg.defaults.poolSize = 25;

// console.log(config);
/* GET users listing. */
const users = require('./models/users');

router.use('/', users);
module.exports = router;
