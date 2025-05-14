const db = require('../db')

const randomColors = ['bg-[#A6D6D6]', 'bg-[#F4F8D3]', 'bg-[#F7CFD8]', 'bg-[#C1CFA1]']
const randomRotation = ['rotate-5', '-rotate-5', 'rotate-7', '-rotate-7', 'rotate-8', '-rotate-8']

let count = 2;
let id = 3;
function pushData(req, res) {

    if (count == 3) {
        count = 0
    }
    const { userName, userMessage } = req.body;
    const color = randomColors[count++]
    const rotate = randomRotation[Math.floor(Math.random() * 6)]

    const now = new Date();
    const day = now.toDateString().split(' ')[0];
    const month = now.toLocaleString('default', { month: 'short' });
    const date = now.getDate() + 'th';
    const uploadDate = `${day}, ${month} ${date}`;

    db.push({
        id: id++,
        text: userMessage,
        user: userName,
        added: uploadDate,
        bg: color,
        rotation: rotate
    })
    res.redirect('/')
}

module.exports = pushData