// localstorage - hold car data in json
// creat an empty json object
var cars = [] // array to used in memory
var car ={
    model :null,
    make : null,
    year: null,
    color: null,
    regNum: null,
    image : null,
}
function dataStore(){
   if(localStorage.getItem('gallery') == null){
     localStorage.setItem('gallery',JSON.stringify(cars)) // used disk   
    }
    
}
// dataStore()
addTocarList = function(){
    var mk = document.getElementById('make')
    var md = document.getElementById('model')
    var cl = document.getElementById('color')
    var img = document.getElementById('image')
    var yr =  document.getElementById('year')
    var rn =  document.getElementById('regNum')
    car.make = mk.value
    car.model = md.value
    car.color = cl.value
    car.image = img.value
    car.year = yr.value
    car.regNum = rn.value
    
cars.push(car)
console.log(cars)
}
addTocarList();