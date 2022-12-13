const { response } = require('express');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const router = require('express').Router();

const app = express();

//Enabling body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//All routes related to openai will be go through openaiRoutes.js
app.use('/openai', require('./routes/openaiRoutes.js'))

// Respond with "hello world" when a GET request is made to the homepage
app.get('/' , (req, res) => {
    res.send("Hello from node server : ᓚᘏᗢ")
})

//Creating server
app.listen(port, ()=> console.log(`Server is up and running on port : ${port}`))