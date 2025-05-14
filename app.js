const express = require('express')
const path = require('path')

const indexRoute = require('./routes/indexRoute')
const newRoute = require('./routes/newRoute')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));


app.use('/', indexRoute)
app.use('/new', newRoute)

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running over PORT: ${PORT}`))


//npm start -> run the server //npm run tailwind -> start the tailwind
// environment.