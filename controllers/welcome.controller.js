var response = require('../helpers/response');

exports.index = function(req, res) {
	return response.json({
		code:200,
		message:'Hello from the NodeJS RESTful side!',
	}, res)
};