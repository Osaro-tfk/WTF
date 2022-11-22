const express = require('express')
const { pushData, InsertData} = require('../controllers/getData.js')
const routeManager = express.Router()


routeManager.get('/',pushData)
routeManager.get('/int/:make/:model/:carYear/:colour/:regNum/:carPhoto',InsertData)
module.exports = {routeManager}