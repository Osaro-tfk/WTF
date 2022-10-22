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
  return `<div class="col-md-3"id="cardHolder">
  <div class="card" style="width: 18rem;" id="cardContent">
    <img src="${dt.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${dt.make} - ${dt.model}</h5>
    <h5 class="card-title">${dt.year} - ${dt.color}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-warning col-4 deleteClass" id="delete" >Remove</button>
    <button type="button" class="btn btn-secondary position-absolute  end-0 me-3 editClass" data-bs-toggle="modal" data-bs-target="#addCar">Edit</button>
    </div>
    </div>
    </div>`
})

 document.getElementById('carList').innerHTML = result.join("")
 deleteItem()
 editItem()
}
loadData()

// function to confirm delete
function confirmDelete(id){
  swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed){
      fetchDelete(id)
      swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}

// function to get items to delete from local storage
function fetchDelete(id){
  cars.splice(id, 1)
  localStorage.setItem('gallery', JSON.stringify(cars))
  loadData()
}

//Function to tell which button should be trigger for delete
function deleteItem(){
  var deleteButtons = document.getElementsByClassName('deleteClass');

  for (let i = 0; i < cars.length; i++){
    deleteButtons[i].onclick = function(){
      confirmDelete(i)
    }
  }
}
deleteItem()

// for editing
function edit(id){
  var carObj = cars[id];
  document.getElementById('make').value = carObj.make;
  document.getElementById('model').value = carObj.model;
  document.getElementById('color').value = carObj.color;
  document.getElementById('year').value = carObj.year;
  document.getElementById('regNum').value = carObj.regNum;
  document.getElementById('image').value = carObj.image;
}

// function to loop through the buttons
function editItem(){
  var editButtons = document.getElementsByClassName('editClass');

  for (let i = 0; i < cars.length; i++){
    editButtons[i].onclick = function(){
     edit(i)
     indexForEdits = i
     document.getElementById('addList').style.display = 'none';
     document.getElementById('update').style.display = 'block';

    }
  }
}
editItem()

var indexForEdits 

// to save the edits; this is added to the Update button
function saveChanges(){
  var carC = Object.create(cars);
  carC.make = document.getElementById('make').value;
  carC.model = document.getElementById('model').value;
  carC.color = document.getElementById('color').value;
  carC.year = document.getElementById('year').value;
  carC.regNum = document.getElementById('regNum').value;
  carC.image = document.getElementById('image').value;
  // these delete the previous entry before the edit so we don't have duplicates
  cars.splice(indexForEdits, 1, carC)
  localStorage.setItem('gallery', JSON.stringify(cars))
  loadData()
  document.getElementById('make').value = ""
  document.getElementById('model').value = ""
  document.getElementById('color').value = ""
  document.getElementById('year').value = ""
  document.getElementById('regNum').value =""
  document.getElementById('image').value = ""


}

// this is added to the add button
function addBtn(){
  document.getElementById('update').style.display = 'none';
  document.getElementById('addList').style.display = 'block';
}

// for search
var mental = document.getElementById("searchInput");
var searchButton = document.getElementById("searchBtn");

function search(event) {
  event.preventDefault();

  var result = cars.map(function card(dt) {
    if (
      mental.value.toLowerCase() == dt.make.toLowerCase() ||
      mental.value.toLowerCase() == dt.model.toLowerCase()
    ) {
      return `<div class="col-md-3"id="cardHolder">
    <div class="card" style="width: 18rem;" id="cardContent">
    <img src="${dt.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${dt.make} - ${dt.model}</h5>
    <h5 class="card-title">${dt.year} - ${dt.color}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-warning col-4 deleteClass" id="delete" >Remove</button>
    <button type="button" class="btn btn-secondary position-absolute  end-0 me-3 editClass" data-bs-toggle="modal" data-bs-target="#addCar">Edit</button>
    </div>
    </div>
  </div>`;
    } else {
      return "";
    }
  });
  document.getElementById("carList").innerHTML = result.join("");
}



