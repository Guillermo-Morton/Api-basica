const Photo = require('../models/photo')

const getPhotos = async (req, res = response) => {
	try {
		const photos = await Photo.find()
		res.status(200).json({
			status: 200,
			success: true,
			msg: 'Fotos obtenidas con éxito',
			items: photos
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
const getPhotoById = async (req, res = response) => {
	try {
		const photo = await Photo.findById(req.params.id)
		res.status(200).json({
			status: 200,
			success: true,
			msg: 'Fotos obtenidas con éxito',
			item: photo
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
const postPhoto = async (req, res = response) => {
	console.log(req.body)
	try {
		// ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion
		const newPhoto = new Photo(req.body)

		// ** Lo guardamos en la base de datos mediante el metodo save
		await newPhoto.save()
		res.status(201).json({
			status: 201,
			success: true,
			msg: 'La foto se guardó correctamente',
			item: newPhoto
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
const patchPhoto = async (req, res = response) => {
	console.log(req.body)
	try {
		// ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion
		await Photo.findByIdAndUpdate(req.params.id, req.body)
		const photo = await Photo.findById(req.params.id)
		// const photo = await Photo.findById(req.params.id, req.body)
		res.status(201).json({
			status: 201,
			success: true,
			msg: 'La foto actualizado correctamente',
			item: photo
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
const deletePhoto = async (req, res = response) => {
	try {
		const photo = await Photo.findById(req.params.id)
		await Photo.findByIdAndDelete(req.params.id)
		res.status(200).json({
			status: 200,
			success: true,
			msg: 'Foto eliminada con éxito',
			item: photo
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
	getPhotos,
	postPhoto,
	patchPhoto,
	deletePhoto,
	getPhotoById
};