const express = require ('express');
const app = express();
const cors = require('cors');
const routerManager = require('./routes/routers.js');

app.use(cors()) //use is a middleware that enables you to take routes, and also execute functions. Here, we are using it to execute the cors function
app.use('/', routerManager.router)
app.use('/fellows', routerManager.router)



app.listen(3006,()=>{
    console.log('server is running')
})