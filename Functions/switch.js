
function selectFood() {
    var babyfood = document.getElementById('bFood').value;
    
    switch(babyfood){
    case "SMA":
        // console.log("do a purchase");
        // document.getElementById("output")
        result("do a purchse");
        break;
    case "Cerelac":
        // console.log("do a purchase");
        // document.getElementById("output")
        result("do a purchase");
        break;
    default:
        // console.log("return home");
        // document.getElementById("output")
        result("return home");
        break;
}
}

function result(action){
    document.getElementById('output').innerHTML = action
}


function switchToIf() {
    var babyfood = document.getElementById('bFood').value;
    if(babyfood == "SMA" || babyfood == "Cerelac"){
        result("do a purchase")
    }
    else{
        result("return home")
    }
}


// loops:running a code more than once
// while
// do while
// for
// for in
// for of