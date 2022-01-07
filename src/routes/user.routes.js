const { Router } = require('express')
const { postUser, getUsers, getUserById, deleteUser, putUser } = require('../controllers/user.controllers')
const  {fieldValidator}  = require('../helpers/field-validator')

const router = Router()

router.get('/user',[], getUsers)
router.get('/user/:uid',[], getUserById)
router.post('/user',[fieldValidator], postUser)
router.delete('/user/:uid',[], deleteUser)
router.patch('/user/:uid',[], putUser)

module.exports = router