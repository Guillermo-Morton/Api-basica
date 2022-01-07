const Event = require('../models/event')

const getEvents = async (req, res = response) => {
	try {
		const events = await Event.find()
		res.status(200).json({
			status: 200,
			success: true,
			msg: 'Eventos obtenidos con éxito',
			items: events
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
const getEventById = async (req, res = response) => {
	try {
		const event = await Event.findById(req.params.id)
		res.status(200).json({
			status: 200,
			success: true,
			msg: 'Eventos obtenidos con éxito',
			item: event
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
const postEvent = async (req, res = response) => {
	console.log(req.body)
	try {
		// ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion
		const newEvent = new Event(req.body)

		// ** Lo guardamos en la base de datos mediante el metodo save
		await newEvent.save()
		res.status(201).json({
			status: 201,
			success: true,
			msg: 'El evento se guardó correctamente',
			item: newEvent
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
const patchEvent = async (req, res = response) => {
	console.log(req.body)
	try {
		// ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion
		await Event.findByIdAndUpdate(req.params.id, req.body)
		const event = await Event.findById(req.params.id)
		// const event = await Event.findById(req.params.id, req.body)
		res.status(201).json({
			status: 201,
			success: true,
			msg: 'Evento actualizado correctamente',
			item: event
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
const deleteEvent = async (req, res = response) => {
	try {
		const event = await Event.findById(req.params.id)
		await Event.findByIdAndDelete(req.params.id)
		res.status(200).json({
			status: 200,
			success: true,
			msg: 'Evento eliminada con éxito',
			item: event
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
	getEvents,
	postEvent,
	patchEvent,
	deleteEvent,
	getEventById
};