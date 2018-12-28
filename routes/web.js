'use strict';
/**
 * Controllers
 */
const UserController = require('../controllers/user.controller')
const WelcomeController = require('../controllers/welcome.controller')

const response = require('../helpers/response');

module.exports = (app) => {
    app.route('/').get(WelcomeController.index)
    // user routes
    app.get('/api/users', UserController.list)
    app.get('/api/user/:id', UserController.detail)
    app.post('/api/user/store', UserController.store)
    app.put('/api/user/update', UserController.update)
    app.delete('/api/user/destroy', UserController.destroy)

	app.get('*', function(req, res, err){
		response.json({
			code:404, message:'Not found'
		}, res);
	});
};