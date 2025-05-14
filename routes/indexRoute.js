const { Router } = require('express')
const getMessages = require('../controllers/getMessages')
const getMessageFromId = require('../controllers/getMessageFromId')


const indexRoute = Router()

indexRoute.get('/', getMessages)
indexRoute.get('/message/:messageId', getMessageFromId)

module.exports = indexRoute