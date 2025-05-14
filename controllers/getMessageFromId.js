const db = require('../db')

function getMessageFromId(req, res) {
    const messageId = req.params.messageId
    const item = db.find((item) => item.id === Number(messageId))
    res.render('messageBox', { item: item })
}

module.exports = getMessageFromId