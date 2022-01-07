const { Router } = require('express')
const { postEvent, getEvents, getEventById, deleteEvent, patchEvent } = require('../controllers/event.controllers')
const  {fieldValidator}  = require('../helpers/field-validator')

const router = Router()

router.get('/event',[], getEvents)
router.get('/event/:uid',[], getEventById)
router.post('/event',[], postEvent)
router.delete('/event/:uid',[], deleteEvent)
router.patch('/event/:uid',[], patchEvent)

module.exports = router