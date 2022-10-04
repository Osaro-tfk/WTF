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
}else{
  cars = JSON.parse(localStorage.getItem('gallery'))
  console.log(cars)
}
  // cars = JSON.parse(localStorage.getItem('gallery'))
  //  console.log(cars)
 //  cars = JSON.parse(localStorage.getItem('gallery'))
 
 
//  var newCars = cars.concat(JSON.parse(localStorage.getItem('gallery')))
//   localStorage.setItem('gallery',newCars)


}



// function will be called once on page load
dataStore()

    

addTocarList = function(){
    // creating objects
   var mk = document.getElementById('make')
    var md = document.getElementById('model')
    var cl = document.getElementById('color')
    var img = document.getElementById('image')
    var yr =  document.getElementById('year')
    var rn =  document.getElementById('regNum')
// assign values to properties

 nCar = Object.create(car)
 nCar.make = mk.value
 nCar.model = md.value
 nCar.color = cl.value
 nCar.image = img.value
 nCar.year = yr.value
 nCar.regNum = rn.value
// update array
console.log(car)
cars.push(nCar)
/// add to localstorage
localStorage.setItem('gallery',JSON.stringify(cars))


console.log(cars)
clear(mk,md,cl,img,yr,rn)
cfm()
console.log('loading data from localstorage')
loadData()
}

function clear(mk,md,cl,img,yr,rn) {
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
    'Data saved Successfully',
    'success'
  )    
}

function photoUpload(){
    var pht = document.getElementById('photo')
    pht.src = document.getElementById('image').value
}


function loadData(){
var data = JSON.parse(localStorage.getItem('gallery'))
var result = data.map(function card(dt){
  return `<div class="col-md-3">
  <div class="card" style="width: 18rem;">
    <img src="${dt.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${dt.make} - ${dt.model}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-outline-primary" id="delete">Delete</button>
    </div>
    </div>
    </div>`
})

 document.getElementById('carList').innerHTML = result.join("")

}
loadData()

var button = document.getElementById('delete');

button.addEventListener('click', function handleClick(event) {
  button.remove();
});



