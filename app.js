const express = require('express');
const app = express(), port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Routing
 */
var routes = require('./routes/web');
routes(app);

var server = app.listen(port, function () {
   var host = server.address().address
   console.log("RESTful API server started on http://%s:%s", host, port)
});