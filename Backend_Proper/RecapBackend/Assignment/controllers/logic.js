const {data} = require("../model/db.js")

const home = (req, res)=>{
    res.status(200).json(data)
}

const find = (req, res)=>{
    var i = req.params.id
    res.status(200).json(data[i])
}

const findMake = (req, res)=>{
    var i = req.params.id
    const filteredData = data.filter((dt)=>{
        return dt.make == i
    })
    res.status(200).json(filteredData)
}

const findModel = (req, res)=>{
    var i = req.params.id
    const filteredData = data.filter((dt)=>{
        return dt.model == i
    })
    res.status(200).json(filteredData)
}

module.exports = {home, find, findMake, findModel}