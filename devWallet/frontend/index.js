// set up express
const express = require('express');
const app = express();
const port = 3000;

var transactions = [
    {text:"Lorem Ipsum is simply dummy text of the printing",
    date:"24 June 2022",
    due:"Due tomorrow"
    },
    {text:"Lorem Ipsum is simply dummy text of the printing",
    date:"24 June 2022",
    due:"Due tomorrow"
    },
    {text:"Lorem Ipsum is simply dummy text of the printing",
    date:"24 June 2022",
    due:"Due tomorrow"
    },
    {text:"Lorem Ipsum is simply dummy text of the printing",
    date:"24 June 2022",
    due:"Due tomorrow"
    }

]

var users = [
    {username:"Eunice", email:"eunicejacob@gmail.com", balance:500},
    {username:"",email:""}
]

// this line makes the folders in public accessible...it makes the styles show
app.use(express.static('public'))

// setup ejs
app.set('view engine', 'ejs')

// create routes
app.get('/',(req,res)=>{
res.render('index',{users: users, trans:transactions});
})

app.get('/login',(req,res)=>{
    res.render('login');
})

// app.get('/register',(req,res)=>{
//     res.render('index');
// })

// run server
app.listen(port,()=>{
    console.log('server running')
})