var express = require('express'),
app = express(),
port = process.env.PORT || 8081,
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/retrieveProductsRoutes');
routes(app);

app.use(function(req, res) {
res.status(200).send()
});

app.listen(port);

console.log('server started on: ' + port);
