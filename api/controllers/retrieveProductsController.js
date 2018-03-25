'use strict';

const products = require('../json/products.json');

exports.retrieve = function(req, res) {
  let objJson = products;

  res.json(objJson);
};
