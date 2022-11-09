const express = require('express')
const controllers = require('../controllers/logic.js')
const router = express.Router()

router.get('/', controllers.home)
router.get('/cars/:id',controllers.find)
router.get('/make/:id',controllers.findMake)
router.get('/model/:id',controllers.findModel)
module.exports = {router}