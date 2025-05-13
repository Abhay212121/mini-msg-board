const { Router } = require('express')
const getForm = require('../controllers/getForm')
const pushData = require('../controllers/pushData')

const newRoute = Router()

newRoute.get('/', getForm)
newRoute.post('/', pushData)

module.exports = newRoute