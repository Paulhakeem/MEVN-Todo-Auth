const express = require('express')
const env = require('dotenv')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')


const app = express()

env.config('./env')

app.use(bodyparser.json())

// login route
app.get('/login', (req, res)=>{
    res.status(200).json({
        status: 200,
        text: "hello "
    })
})



// server
app.listen(5000, ()=> {
    console.log('server is running....');
})