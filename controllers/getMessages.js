const db = require('../db')

function getMessages(req, res) {
    res.render('index', { message: db })
}

module.exports = getMessages