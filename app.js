const express=require('express')
const path=require('path')
const hbs=require('hbs')
const request=require('request')

const app=express()

const port=process.env.PORT || 4000

const publicDir=path.join(__dirname,'../express-app/public')
const partialFol=path.join(__dirname,'views/partials')

app.use(express.static(publicDir))
app.set('view engine','hbs')
hbs.registerPartials(partialFol)

app.get('/home',(req,res)=>{
res.render('Home')
})

app.get('/contactUs',(req,res)=>{
res.render('ContactUs',
    {   
    name:'apurva',
    address:'Ulhasnagar'})
})

app.get('/Query',(req,res)=>
{
    if(!req.query.query)
    {
        return res.send('Please Query Parameter...')
    }
    res.send(req.query.query)
})

app.get('/request',(req,res)=>{
    res.render('request')
})

app.listen(port,console.log('server is up'+port))
