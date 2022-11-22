const express = require('express');
const rmg = require('./routes/route.js');
const cors = require('cors');
const app = express();
app.use(cors())
const port = 3000

app.use('/',rmg.routeManager)

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})