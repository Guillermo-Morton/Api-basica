const { Router } = require('express')
const { postUser, getUsers, getUserById, deleteUser, patchUser, buyPhoto, sellPhoto } = require('../controllers/user.controllers')
const  {fieldValidator}  = require('../helpers/field-validator')

const router = Router()

router.get('/user',[], getUsers)
router.get('/user/:uid',[], getUserById)
router.post('/user',[], postUser)
router.delete('/user/:uid',[], deleteUser)
router.patch('/user/:uid',[], patchUser)
router.patch('/photos/buy/:uid',[], buyPhoto)
router.patch('/photos/sell/:uid',[], sellPhoto)

module.exports = router