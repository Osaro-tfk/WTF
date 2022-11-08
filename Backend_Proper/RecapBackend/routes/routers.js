const express = require('express')
const controllers = require('../controllers/logic.js')
const router = express.Router()

router.get('/', controllers.home)
router.get('/fellows/:id', controllers.find)
module.exports = {router}
