const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();
console.log(process.env.DATABASE_URL)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));



const color = require('colors')


app.use(express.static('./public'))

const routes = require('./routes');
app.use('/', routes);

const models = require('./models');

// app.set('views', './views')
app.set('view engine', 'pug')

app.listen(8000,() => {
    console.log("Listening on Port 8000")
})
