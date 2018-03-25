'use strict';

const products = require('../json/products.json');

exports.retrieve = function(req, res) {
  let objJson = products;

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.json(objJson);
};
