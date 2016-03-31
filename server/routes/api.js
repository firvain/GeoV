'use strict';
const config = require('../config/config');
const express = require('express');
const pg = require('pg');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development';
let configConnection;
if (environment === 'production') {
  configConnection = config.production.connection;
} else {
  configConnection = config.development.connection;
}
const rollback = (client, done) => {
  // if there was a problem rolling back the query
  // something is seriously messed up.  Return the error
  // to the done function to close & remove this client from
  // the pool.  If you leave a client in the pool with an unaborted
  // transaction weird, hard to diagnose problems might happen.
  client.query('ROLLBACK', (error) => done(error));
};

// console.log(config);
/* GET users listing. */
router.get('/', function (req, res, next) {
  pg.connect(configConnection, function (err, client, done) {
    if (err) {
      console.log('Could not connect to postgres');
    } else {
      console.log('Connected');
      const query = client.query('SELECT * from public.users', function (error, result) {
        // console.log(this.text);
        if (result) {
          const json = JSON.stringify(result.rows);
          res.writeHead(200, {
            'content-type': 'application/json',
            'content-length': Buffer.byteLength(json),
          });
          res.end(json);
        } else {
          throw error;
        }
        done();
      });
    }
  });
});
module.exports = router;
