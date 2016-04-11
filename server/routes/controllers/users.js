'use strict';
const config = require('../../config/config');
const express = require('express');
// const debug = require('debug')('server:server');
const logger = require('../../utils/logger');

const pg = require('pg');
const router = express.Router();
const _ = require('lodash');

const rollback = (client, done) => {
  client.query('ROLLBACK', (error) => done(error)
    // if there was a problem rolling back the query
    // something is seriously messed up.  Return the error
    // to the done function to close & remove this client from
    // the pool.  If you leave a client in the pool with an unaborted
    // transaction weird, hard to diagnose problems might happen.
  );
};


router.route('/users')
.get((req, res, next) => {
  pg.connect(config.connection, (err, client, done) => {
    if (err) {
      logger.error('Could not connect to postgres');
    } else {
      logger.debug('Connected to GeoV');
      client.query('SELECT * from public.users', (error, result) => {
        done();
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
      });
    }
  });
})
.post((req, res, next) => {
  // console.log(_.trimEnd(text, ', '));
  // console.log(typeof req.body.first_name);
  const firstName = _.lowerCase(req.body.first_name) || '';
  const lastName = _.lowerCase(req.body.last_name) || '';
  const phoneNumber = _.lowerCase(req.body.phone_number) || '';
  const faxNumber = _.lowerCase(req.body.fax_number) || '';
  const email = _.lowerCase(req.body.email) || '';
  const streetName = _.lowerCase(req.body.street_name) || '';
  const streetNumber = _.lowerCase(req.body.street_number) || '';
  const psCode = _.lowerCase(req.body.ps_code) || '';
  const city = _.lowerCase(req.body.city) || '';
  const country = _.lowerCase(req.body.country) || '';
  const isActive = (req.body.is_active) || true;

  pg.connect(config.connection, (err, client, done) => {
    if (err) {
      logger.error('Could not connect to postgres');
    } else {
      logger.debug('Connected to GeoV');
      const columns = `(first_name,last_name,phone_number,fax_number,email,
      street_name,street_number,ps_code,city,country,is_active)`;
      const values = `('${firstName}','${lastName}','${phoneNumber}','${faxNumber}','${email}',
      '${streetName}','${streetNumber}','${psCode}','${city}','${country}',${isActive})`;
      const text = `INSERT INTO public.users ${columns} VALUES ${values}`;
      client.query(text, (error, result) => {
        done();
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
      });
    }
  });
});


router.route('/users/:user_id')
.get((req, res, next) => {
  const id = req.params.user_id;
  pg.connect(config.connection, (err, client, done) => {
    if (err) {
      logger.debug('Could not connect to postgres');
    } else {
      logger.debug('Connected to GeoV');
      const text = 'SELECT * FROM public.users WHERE id= $1';
      client.query(text, [id], (error, result) => {
        done();
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
      });
    }
  });
})
.delete((req, res, next) => {
  const id = req.params.user_id;
  pg.connect(config.connection, (err, client, done) => {
    if (err) {
      logger.error(err);
      throw err;
    }
    client.query('BEGIN', (err) => {
      if (err) {
        logger.error(err);
        return rollback(client, done);
      }
      // as long as we do not call the `done` callback we can do
      // whatever we want...the client is ours until we call `done`
      // on the flip side, if you do call `done` before either COMMIT or ROLLBACK
      // what you are doing is returning a client back to the pool while it
      // is in the middle of a transaction.
      // Returning a client while its in the middle of a transaction
      // will lead to weird & hard to diagnose errors.
      process.nextTick(() => {
        const text = 'DELETE FROM public.users WHERE id= $1';
        client.query(text, [id], (err) => {
          logger.error(err);
          if (err) return rollback(client, done);
          client.query('COMMIT', done);
          res.status(200).send('Successfully deleted');
        });
      });
    });
  });
});


// router.route('/users/:user_id/:property_id')
// .get((req, res, next) => {
//   const user_id = req.params.user_id;
//   const property_id = req.params.property_id;
//   res.send(`id ${user_id} --- property_id ${property_id}`);
// });
// router.param('user_id', function (req, res, next, user_id) {
//   console.log('CALLED ONLY ONCE at user_id '+ user_id);
//   next();
// });
// router.param('property_id', function (req, res, next, property_id) {
//   console.log('CALLED ONLY ONCE at property_id '+ property_id);
//   next();
// });
module.exports = router;
