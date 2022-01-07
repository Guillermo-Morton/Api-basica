const User = require('../models/user')
const Photo = require('../models/photo')
const bcrypt = require("bcryptjs");

const getUsers = async (req, res = response) => {
	try {
		const users = await User.find()
		res.status(200).json({
			status: 200,
			success: true,
			msg: 'Usuarios obtenidos con éxito',
			items: users
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 500,
			success: false,
			msg: error.message,
			items: {}
		});
	}
}
const getUserById = async (req, res = response) => {
	try {
		const user = await User.findById(req.params.uid)
		res.status(200).json({
			status: 200,
			success: true,
			msg: 'Usuario obtenido con éxito',
			item: user
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 500,
			success: false,
			msg: error.message,
			item: {}
		});
	}
}
const postUser = async (req, res = response) => {
	console.log(req.body)
	try {
		const { password} = req.body
		// ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion
		const newUser = new User(req.body)

		//Encriptar contraseña
		const salt = bcrypt.genSaltSync(); //numero de veces que se aplicará encriptación
		newUser.password = bcrypt.hashSync(password, salt); //encriptación de contraseña

		// ** Lo guardamos en la base de datos mediante el metodo save
		await newUser.save()
		res.status(201).json({
			status: 201,
			success: true,
			msg: 'El usuario se guardó correctamente',
			item: newUser
		})
	} catch (error) {
		console.log(error)
		res.status(400).json({
			status: 400,
			success: false,
			msg: error.message,
			item: {}
		});
	}
}
const patchUser = async (req, res = response) => {
	console.log(req.body)
	try {
		const { password } = req.body
		
		const salt = bcrypt.genSaltSync(); //numero de veces que se aplicará encriptación
		req.body.password = bcrypt.hashSync(password, salt); //encriptación de contraseña

		// ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion
		await User.findByIdAndUpdate(req.params.uid, req.body)
		const user = await User.findById(req.params.uid)
		// const user = await User.findById(req.params.uid, req.body)
		res.status(201).json({
			status: 201,
			success: true,
			msg: 'El usuario actualizado correctamente',
			item: user
		})
	} catch (error) {
		console.log(error)
		res.status(400).json({
			status: 400,
			success: false,
			msg: error.message,
			item: {}
		});
	}
}
const buyPhoto = async (req, res = response) => {
	console.log(req.body)
	try {
		const user = await User.findById(req.params.uid)
		const photo = await Photo.findById(req.body.photo)
		// ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion
		const photos = [...user.photos || [], req.body.photo]
		if(user.balance < photo.price) return res.status(400).json({
			status: 400,
			success: false,
			msg: 'No tenes dinero suficiente para comprar esta foto',
			item: {photo}
		});
		await User.findByIdAndUpdate(req.params.uid, {photos, balance: user.balance - photo.price})
		user.photos = photos
		user.balance = user.balance - photo.price
		// const user = await User.findById(req.params.uid, req.body)
		res.status(201).json({
			status: 201,
			success: true,
			msg: 'El usuario compro una foto correctamente',
			item: { user, photo }
		})
	} catch (error) {
		console.log(error)
		res.status(400).json({
			status: 400,
			success: false,
			msg: error.message,
			item: {}
		});
	}
}
const sellPhoto = async (req, res = response) => {
	console.log(req.body)
	try {
		const user = await User.findById(req.params.uid)
		const photo = await Photo.findById(req.body.photo)
		// ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion
		const photos = user.photos.filter(photo => photo !== req.body.photo)

		await User.findByIdAndUpdate(req.params.uid, {photos, balance: user.balance + photo.price})

		user.photos = photos
		user.balance = user.balance + photo.price
		// const user = await User.findById(req.params.uid, req.body)
		res.status(201).json({
			status: 201,
			success: true,
			msg: 'El usuario vendio una foto correctamente',
			item: { user, photo}
		})
	} catch (error) {
		console.log(error)
		res.status(400).json({
			status: 400,
			success: false,
			msg: error.message,
			item: {}
		});
	}
}
const deleteUser = async (req, res = response) => {
	try {
		const user = await User.findById(req.params.uid)
		await User.findByIdAndDelete(req.params.uid)
		res.status(200).json({
			status: 200,
			success: true,
			msg: 'Usuario eliminado con éxito',
			item: user
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 500,
			success: false,
			msg: error.message,
			item: {}
		});
	}
}
module.exports = {
	getUsers,
	postUser,
	patchUser,
	deleteUser,
	getUserById,
	buyPhoto,
	sellPhoto
};