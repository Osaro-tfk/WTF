const conn = require('../models/config.js')

conn.connection.connect()

const pushData = async (req, res)=>{
const sql = "select * from showroom";
conn.connection.query(sql,(err,result)=>{
    if(err){
console.log(err)
    }else{
        res.status(200).json(result)

    }
})
       
}

const InsertData = async(req,res)=>{
var make = req.params.Make;
var model = req.params.Model;
var carYear = req.params.CarYear;
var colour = req.params.Colour;
var regNum = req.params.regNumber;
var carPhoto = req.params.carPhotoLink;
var sql = "insert into showroom(make,model,carYear,colour,regNumber,carPhotoLink)values ?"
var values = [[make,model,carYear,colour,regNum,carPhoto]]
conn.connection.query(sql,[values],(err,result)=>{
if(err){
console.log(err)
}else{
    res.status(200).json([{message:"data Inserted"}])
}
})
} 

module.exports = {pushData,InsertData}