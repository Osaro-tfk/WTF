var mysql = require('mysql');
var connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Christ@2022",
        database: "olimpuscars"
    }
)
connection.connect(err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('connection is succesfull')
       const command = "select * from showroom";
       connection.query(command,(err,result)=>{
           if(err){
               console.log(err)
           } else
           {
               console.log(result);
           }
       })
    }
})