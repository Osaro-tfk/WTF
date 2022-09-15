// declare six variables for each of the images (inputs) and give them a value referencing their ids
// inputs
var cerelac = document.getElementById("cerelac");
var friso = document.getElementById("friso");
var nan = document.getElementById("nan");
var nutriben = document.getElementById("nutriben");
var nutribom = document.getElementById("nutribom");
var sma = document.getElementById("sma");

// declare two variables for the outputs (baby food name and price)
// outputs
var babyfood_name = document.getElementById("babyfood_name");
var babyfood_price = document.getElementById("babyfood_price");


// creates functions for the outputs of the click events on the variables
function cel_click_hand(){
    babyfood_name.innerHTML = "Cerelac";
    babyfood_price.innerHTML = "N25000.00";
}
function fris_click_hand(){
    babyfood_name.innerHTML = "Friso";
    babyfood_price.innerHTML = "N30000.00";
}
function nan_click_hand(){
    babyfood_name.innerHTML = "NAN";
    babyfood_price.innerHTML = "N18000.00";
}
function ben_click_hand(){
    babyfood_name.innerHTML = "Nutriben";
    babyfood_price.innerHTML = "N15000.00";
}
function bom_click_hand(){
    babyfood_name.innerHTML = "Nutribom";
    babyfood_price.innerHTML = "N10000.00";
}
function sma_click_hand(){
    babyfood_name.innerHTML = "SMA";
    babyfood_price.innerHTML = "N20000.00";
}


// create event listeners for each of the variables using addEventListener

cerelac.addEventListener("click", cel_click_hand, false);
friso.addEventListener("click", fris_click_hand, false);
nan.addEventListener("click", nan_click_hand, false);
nutriben.addEventListener("click", ben_click_hand, false);
nutribom.addEventListener("click", bom_click_hand, false);
sma.addEventListener("click", sma_click_hand, false);