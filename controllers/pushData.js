const db = require('../db')

const randomColors = ['bg-[#A6D6D6]', 'bg-[#F4F8D3]', 'bg-[#F7CFD8]', 'bg-[#C1CFA1]']
const randomRotation = ['rotate-5', '-rotate-5', 'rotate-7', '-rotate-7', 'rotate-8', '-rotate-8']

let count = 2;
function pushData(req, res) {
    if (count == 3) {
        count = 0
    }
    const { userName, userMessage } = req.body;
    const color = randomColors[count++]
    const rotate = randomRotation[Math.floor(Math.random() * 6)]

    // let uploadDate = new Date().toString();
    // uploadDate = uploadDate.split(' ');
    // let day = uploadDate[0]
    // let month = uploadDate[1]
    // let date = uploadDate[2] + 'th'
    // let date_month = month + " " + date
    // uploadDate = day + ', ' + date_month
    // console.log(date_month)

    // Format date
    const now = new Date();
    const day = now.toDateString().split(' ')[0]; // 'Mon'
    const month = now.toLocaleString('default', { month: 'short' }); // 'May'
    const date = now.getDate() + 'th'; // '14th'
    const uploadDate = `${day}, ${month} ${date}`;

    db.push({
        text: userMessage,
        user: userName,
        added: uploadDate,
        bg: color,
        rotation: rotate
    })
    res.redirect('/')
}

module.exports = pushData