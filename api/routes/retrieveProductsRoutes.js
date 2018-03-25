
'use strict';

module.exports = function(app) {
	var extrato = require('../controllers/retrieveProductsController.js');
    var path = "/store";

	// extratoD0 Routes
	app.route(path + '/products')
		.get(extrato.retrieve);
        
};
