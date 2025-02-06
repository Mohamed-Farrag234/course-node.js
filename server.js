const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const {ConnectDB} = require('./config/conndb')

const app = express()
app.use(express.json())

ConnectDB()

mongoose.connection.once('open' , () => {
    app.listen(process.env.PORT, ()=> {
        console.log('Server Is Runing.......')
    })
    console.log('Connect DB.........')
})

mongoose.connection.on('error' , ()=>{
    console.log(error)
})

module.exports = {app}
