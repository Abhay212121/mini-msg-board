const express = require('express')
const path = require('path')

const indexRoute = require('./routes/indexRoute')
const newRoute = require('./routes/newRoute')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));


app.use('/', indexRoute)
app.use('/new', newRoute)

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running over PORT: ${PORT}`))