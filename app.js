const dotenv = require('dotenv')

const passport = require('passport')
const mongoose = require('mongoose');
const express = require('express');
const app = express();
dotenv.config({path: './config.env'})
require('./db/conn')
app.use(express.json())
app.use(require('./Router/auth'))
var bodyParser = require('body-parser')
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({
    extended: true
  }));


const middleware = (req,res,next) =>{
    console.log("Hellow middleware");
    next();
}

app.get('/',(req,res)=>{
res.send(`Hello world from the server`)
});


app.get('/aboutme',middleware ,(req,res)=>{
res.send(`Hello world about me page the server`)
});
app.get('/signin',(req,res)=>{
res.send(`Hello world from login page the server`)
});
app.get('/register',(req,res)=>{
res.send(`Hello world from Registration page the server`)
});
app.get('/feedback',(req,res)=>{
res.send(`Hello world from the feedback page server`)
});
app.get('/answer',(req,res)=>{
res.send(`Hello world from the answer page server`)
});
app.get('/sendemail',(req,res)=>{
res.send(`hello world from the send email`);
})
app.get('/changepassword',(req,res)=>{
res.send(`hello world from the change passowrd email`);
})


app.listen(PORT,()=>{
    console.log(`server is running at the port no ${PORT}`)
})

