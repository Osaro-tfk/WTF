// localStorage.setItem("name","Augustine Effah Danso")
// var fullNameV = "Augustine  Danso"
//  var details = localStorage.getItem('name')
//  alert(details)
function storeName(){
    var fullname =  document.getElementById('fullname').value
     localStorage.setItem("name",fullname)
    alert('content saved')
    showName()
  }
  function showName(){
     var details = localStorage.getItem('name')
     document.getElementById('output').innerHTML = details;
  }
  showName()