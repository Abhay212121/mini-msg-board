const db = require('../db')

function pushData(req, res) {
    const { userName, userMessage } = req.body;
    db.push({
        text: userMessage,
        user: userName,
        added: new Date()
    })
    res.redirect('/')
}

module.exports = pushData