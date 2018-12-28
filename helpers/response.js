'use strict';

exports.json = (data, res) => {
	res.json(data);
	res.end();	
} 
exports.ok = function(message='ok',values, res) {
	var data = {
	  'status': 200,
	  'message':message,
	  'data': values
	};
	res.json(data);
	res.end();
};
exports.fail = (message, res, code=500) => {
	var data = {
	  'status': code,
	  'message': message
	};
	res.json(data);
	res.end();
}