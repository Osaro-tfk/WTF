const express = require ('express');
const app = express();
const cors = require('cors');
const routerManager = require('./routes/routers.js');

app.use(cors())
app.use('/', routerManager.router)
app.use('/make', routerManager.router)
app.use('/model', routerManager.router)

app.listen(3004,()=>{
    console.log('server is running')
})