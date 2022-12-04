const express = require('express');
const app = express()
const dotenv = require("dotenv").config()
const {errorHandler} = require('./middleware/errrorMiddleware')
const {connectDB} = require('./config/db')
const port = process.env.PORT ;

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/',((req, res)=>{
    res.send("hello")
}))
app.use('/api/goals', require('./routes/goalRoutes.js'))
app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`listining on  ${port}`);
})