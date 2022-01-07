const { Router } = require('express')
const { postPhoto, getPhotos, getPhotoById, deletePhoto, patchPhoto } = require('../controllers/photo.controllers')
const  {fieldValidator}  = require('../helpers/field-validator')

const router = Router()

router.get('/photo',[], getPhotos)
router.get('/photo/:uid',[], getPhotoById)
router.post('/photo',[], postPhoto)
router.delete('/photo/:uid',[], deletePhoto)
router.patch('/photo/:uid',[], patchPhoto)

module.exports = router