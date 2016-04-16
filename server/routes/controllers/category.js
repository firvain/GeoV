'use strict';
const config = require('../../config/config');
const express = require('express');
// const debug = require('debug')('server:server');
const logger = require('../../utils/logger');

const pg = require('pg');
const router = express.Router();

// Categories
router.route('/category')
.get((req, res, next) => {
  pg.connect(config.connection, (err, client, done) => {
    if (err) {
      logger.error('Could not connect to postgres');
      res.status(500).json({
        msg: 'Service Unavailable',
      });
      return err;
    }
    const text = 'SELECT name, category_id as value FROM category WHERE parent_id IS NULL;';
    client.query(text, (error, result) => {
      done();
      if (error) {
        res.status(500).json({
          msg: 'Internal Database Error',
        });
        return error;
      }
      res.status(200).json(result.rows);
      return true;
    });
    return true;
  });
});


// SubCategories
router.route('/category/:id')
.get((req, res, next) => {
  const parentId = req.params.id;
  pg.connect(config.connection, (err, client, done) => {
    if (err) {
      logger.error('Could not connect to postgres');
      res.status(500).json({
        msg: 'Service Unavailable',
      });
      return err;
    }
    const text = `WITH RECURSIVE tree AS (
      SELECT category_id, category.name, ARRAY[10]::integer[] AS ancestors FROM category
      WHERE parent_id = $1
      UNION ALL
      SELECT category.category_id, category.name, tree.ancestors || category.parent_id
      FROM category, tree
      WHERE category.parent_id = tree.category_id
    )
    SELECT name, category_id as value FROM tree;`;
    client.query(text, [parentId], (error, result) => {
      done();
      if (error) {
        res.status(500).json({
          msg: 'Internal Database Error',
        });
        return error;
      }
      res.status(200).json(result.rows);
      return true;
    });
    return true;
  });
});
module.exports = router;
