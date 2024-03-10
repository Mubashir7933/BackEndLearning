require('dotenv').config()// Taking dotenv so that we can implement in this file/project
const express = require('express')// require module syntax 
// we acquired express from node
// import express from "express"// both are same just sytax is different
const app = express()// we created an app variable from express framework
const port =  process.env.PORT || 4000;// A port to listen a server

app.get('/', (req, res) => {
  res.send('Hello World!')
}) /*In this code the app is having get request on / if there is any 
request on / in response the server will give "Hello World" in response */

//Always write slash in routing
app.get('/instagram', (req, res) => {
    res.send('Mubashir Ahmed');
})

app.get('/login', (res, req)=> {
    res.send('<h1>My Login </h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})// we are getting listening on app because all of the powers of express JS are now
//accessible by app

//Congratulations You just made a Server 
//Always restart your application whenever you change in code