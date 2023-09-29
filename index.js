require('dotenv').config()
const express=require('express')
const app=express()
//const port=3000
//we are using port from .env file
//no need to declare here

app.get('/',(req,res)=>{
    res.send('<h1>Learning backend from Hitesh cahi aur code')
})

app.get('/twitter',(req,res)=>{
    res.send("login to twitter")
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})
app.get('/login',(req,res)=>{
    res.send("<h1>Please login</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${process.env.PORT} `)
})