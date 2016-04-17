'use strict';
const express = require('express');
const router = express.Router();
// const debug = require('debug')('server:server');
const db = require('../../utils/pg-promise-init.js').db;
const query = require('../../sql/index').users;
const _ = require('lodash');

router.route('/users')
.get((req, res) => {
  db.any(query.all)
  .then((data) => {
    if (data.length === 0) {
      res.status(404);
    } else {
      res.status(200).json(data);
    }
  })
  .catch((error) => {
    res.status(500).json({
      success: false,
      error: error.message || error,
    });
  });
})
.post((req, res) => {
  // console.log(_.trimEnd(text, ', '));
  // console.log(typeof req.body.first_name);
  const obj = {};
  obj.firstName = _.lowerCase(req.body.firstName) || '';
  obj.lastName = _.lowerCase(req.body.lastName) || '';
  obj.phoneNumber = _.lowerCase(req.body.phoneNumber) || '';
  obj.faxNumber = _.lowerCase(req.body.faxNumber) || '';
  obj.email = _.lowerCase(req.body.email) || '';
  obj.streetName = _.lowerCase(req.body.streetName) || '';
  obj.streetNumber = _.lowerCase(req.body.streetNumber) || '';
  obj.psCode = _.lowerCase(req.body.psCode) || '';
  obj.city = _.lowerCase(req.body.city) || '';
  obj.country = _.lowerCase(req.body.country) || '';
  obj.isActive = (req.body.isActive) || true;
  db.one(query.add, obj)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((error) => {
    res.status(500).json({
      success: false,
      error: error.message || error,
    });
  });
});


router.route('/users/:user_id')
.get((req, res) => {
  const id = parseInt(req.params.user_id, 10);
  db.one(query.find, [id])
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((error) => {
    res.status(500).json({
      success: false,
      error: error.message || error,
    });
  });
})
.delete((req, res) => {
  const id = parseInt(req.params.user_id, 10);
  db.oneOrNone(query.delete, [id])
  .then((data) => {
    if (data === null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(data);
    }
  })
  .catch((error) => {
    res.status(500).json({
      success: false,
      error: error.message || error,
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
