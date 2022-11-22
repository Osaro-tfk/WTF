// set up express
const express = require('express');
const app = express();
const port = 3000;

// this line makes the folders in public accessible...it makes the styles show
app.use(express.static('public'))

// setup ejs
app.set('view engine', 'ejs')

// create routes
app.get('/',(req,res)=>{
res.render('index');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/register',(req,res)=>{
    res.render('index');
})

// run server
app.listen(port,()=>{
    console.log('server running')
})