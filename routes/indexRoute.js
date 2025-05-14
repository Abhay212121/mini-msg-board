const { Router } = require('express')
const getMessages = require('../controllers/getMessages')


const indexRoute = Router()

indexRoute.get('/', getMessages)

module.exports = indexRoute