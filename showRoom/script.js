// localstorage to hold car data in json
// creat an empty json object
// code to hold cars
var cars = [] // array to be used in memory //JSON object to hold individual cars created when the var car is populated multiple times.
var car ={
    model :null,
    make : null,
    year: null,
    color: null,
    regNum: null,
    image : null,
}
function dataStore(){
//    if(localStorage.getItem('gallery') == null){
     localStorage.setItem('gallery',JSON.stringify(cars)) // to be used on disk //the function would be used to include data in the local storage (getItem is used to check if the content exist, if it doesn't, setItem is used to add it.)
    // }
    
}

// code to add cars
addTocarList = function(){
    // create objects
    var mk = document.getElementById('make')
    var md = document.getElementById('model')
    var cl = document.getElementById('color')
    var img = document.getElementById('image')
    var yr =  document.getElementById('year')
    var rn =  document.getElementById('regNum')
    // assign values to properties of the objects
    car.make = mk.value
    car.model = md.value
    car.color = cl.value
    car.image = img.value
    car.year = yr.value
    car.regNum = rn.value

// update array
cars.push(car)
// dataStore()
console.log(cars)
clear(mk, md, cl, img, yr, rn)
cfm()
console.log('loading data from localStorage')
// loadData()
}

// function to clear
function clear(mk, md, cl, img, yr, rn){
    mk.value = ""
    md.value = ""
    cl.value = ""
    img.value = ""
    yr.value = ""
    rn.value = ""
}

function cfm(){
    Swal.fire(
        'Good job!',
        'Data saved successfully!',
        'success'
      )
}

function photoUpload(){
    var pht = document.getElementById('photo')
    pht.src = document.getElementById('image').value
}

function card(){
    '<div class="col-md-3"><div class="card" style="width: 18rem;"><img src="https://wallpapercave.com/wp/wp10444966.jpg" class="card-img-top" alt="..."/><div    class="card-body"><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p></div></div></div>'
}
function loadData(){
    var data = JSON.parse(localStorage.getItem('gallery')) 
    console.log('data')
}

