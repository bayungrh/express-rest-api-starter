'use strict';

const response = require('../helpers/response');
const { User } = require('../config/sequelize')

exports.list = async (req, res) => {
	var users = await User.findAll().then(users).catch(err => res.fail('error', res))
	return response.json({
		code:200,
		message:'ok',
		attributes:users
	}, res)
};

exports.detail = async(req, res) => {
	var id = req.params.id;
	var user = await User.findById(id).then(user);
	return response.json({
		code:200,
		message:user ? 'ok' : 'user not found',
		attributes:user
	}, res)
};

exports.store = async (req, res) => {
	const input = req.body;
	var store = await User.create({
		name:input.name,
		email:input.email,
	}).then(store).catch(err => {
		return false
	}) 
	if (store) {
		return response.json({
			code:200, message:'Insert Success',
		}, res)
	} else {
		return response.json({
			code:500, message:'Insert Failed',
		}, res)
	}
}

exports.update = async (req, res) => {
	const input = req.body
	var id = input.id
	var update = await User.update({
		name:input.name,
		email:input.email,
	}, {
		where:{id:id}
	}).then(update).catch(err => {
		return false
	})
	if (update) {
		return response.json({
			code:200, message:'Update Success',
		}, res)
	} else {
		return response.json({
			code:500, message:'Update Failed',
		}, res)
	}
}

exports.destroy = async (req, res) => {
	const input = req.body
	var id = input.id
	var destroy = await User.destroy({
		where:{id:id}
	}).then(destroy).catch(err => {
		return false
	})
	if (destroy) {
		return response.json({
			code:200, message:`UserID ${id} Deleted Successful`,
		}, res)
	} else {
		return response.json({
			code:500, message:'Delete Failed',
		}, res)
	}
}