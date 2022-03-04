const express = require('express')
const mongoose = require('mongoose');
const ConnectDB = require('./ConnectDB');
const { query } = require('express')
const apiRoute = require('../src/routes') 
const bodyParser = require('body-parser')

const app = express()
const port = 4001
var cors = require('cors');
app.use(cors());

// app.use(bodyParser.json())
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }))
app.use('/api', apiRoute)
ConnectDB



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})