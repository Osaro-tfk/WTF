// function declaration
function doWalk(){
    // function definition
    console.log("right")
    console.log("left")
}

// function call
doWalk()

function add(){
    var num1, num2;
    num1 = 7;
    num2 = 5;
    console.log(num1 + num2);
}

add()

function subtract(){
    var num1, num2;
    num1 = 7;
    num2 = 5;    
    console.log(num1 - num2)
}
subtract()

function divide(){
    var num1, num2;
    num1 = 8;
    num2 = 2;    
    console.log(num1 / num2)
}
divide()

function multiply(){
    var num1, num2;
    num1 = 8;
    num2 = 2;
    console.log(num1 * num2)
}
multiply()

function modulo(){
    var num1, num2;
    num1 = 8;
    num2 = 2;
    console.log(num1 % num2)
}
modulo()

function compare(){
    var num1, num2;
    num1 = 8;
    num2 = 2;
    console.log(num1 == num2)
    console.log(num1 === num2)
}

// variable scopes
// local scope
// global scope

// parameterised functions - 2 ways
// function mul(){
//     var anyNum = 5
//     var result = anyNum * 2;
//     // return result;
//     console.log(result)
// }
// mul()

// console.log(mul())

// function mul(){
//     var anyNum = 5
//     var result = anyNum * 2;
//     return result;
// }
// console.log(mul())

// function mul(packs){
//     var result = packs * 16
//     return result;
// }
// console.log(mul(6))
 
// function pos(quantity,unitprice){
//     var totalAmount = unitprice + quantity
//     return totalAmount;
// }
// console.log(pos(mul(6),(10)))

// 1 pack of water == 16 bottles

function bottleCount(packs){
    var result = packs * 16
    return result
}
// document.write(bottleCount(2))

function posRetail(unitPrice, quantity){
    var totalAmount = unitPrice * quantity
    return totalAmount
}

console.log(posRetail(40,bottleCount(2)))


// decision making in Javascript: returning code based on certain conditions
// if, if else, if else if, switch case

// function valid(breakTime){
    // Amala
    // Noodles
//     if( breakTime >= 20){
//         console.log("prepare amala")
//     }
//     else{console.log("prepare noodles")
// }

// }
// valid(10)

function valid(breakTime){
    if( breakTime >= 20){
        console.log("prepare amala")
    }
    else{console.log("prepare noodles")
}

}

function valid(breakTime){
    // Amala 
    // noodles
    if(breakTime >= 20)
    {
        
        document.getElementById("output").innerHTML = "prepare Amala"
    }
    else{
        document.getElementById("output").innerHTML = "prepare noodles"
    }
    }

// write a function to compare 2 numbers
// var compare = function(x,y){}
// 
function compare(x,y){
    if(x === y){
        console.log("x is equal to y")
    }
    else{
        console.log("x is not equal to y")
    }
}
compare(5,7)

// A simple algorithm to check the school graduation requirements: 80% & 2 certs
// function with nested if statements

// output is graduation

// var checker = function (grade){
// if(grade >= 80 && grade <= 100){
//     console.log("graduate")
// }
// else{
//     console.log("retake class")
// }
// }

// checker(90)

// var checker = function (grade, nCerts){
//     if(grade > 100){
//         console.log("invalid score")
//     }
//     else{
//         if(grade >= 80 && grade <= 100 && nCerts >= 2){
//             console.log("graduate")
//         }
//         else{
//             console.log("retake class")
//         }
//     }
    
//     }
    
//     checker(80.5, 2)

// var checker = function (grade, nCerts){
//     if(grade > 100){
//         console.log("invalid score")
//     }
//     else if(grade >= 80 && grade <= 100 && nCerts >= 2){
//             console.log("graduate letter")
//         }
//     else{
//             console.log("retake class letter")
//         }
//     }
    
//     checker(90, 2)

// class activity
// if grade is 80 or above, with less certs, students should be assigned a retake class letter
// if grade is less than 80 with less certs, students should be assigned a withdraw letter
// else student should be given graduation letter (above 80 for grade and above 2 for certs)

var checkr = function(grade,certs){
    if(grade >= 80 && certs < 2){
        console.log("assign retake class letter")
    }
    else if(grade < 80 && certs < 2){
        console.log("assign withdraw letter")
    }
    else if( grade >= 80 && certs >= 2 ){
        console.log("assign graduation letter")
    }
}
checkr(75, 1)
checkr(80, 1)
checkr(89, 2)

// nested ifs
var awardCert = function (grade, cert){
    if(grade > 100 || isNaN == true){
        console.log("invalid number")
    }
    else{
        if (grade >= 80 && grade <= 100)
        {
            console.log("graduate")
            if (cert >= 3){
                console.log("Award fellow")
            }
            else{
                console.log("no award")
            }
        }
        else{
            console.log("withdrawal")
        }
    }
}

awardCert (80,2)
awardCert(72,3)
awardCert(82,3)
awardCert('abc', 3)

var awardCert = function(grade, cert){
    if (grade > 100 || isNaN == true){
        result = "invalid number"
    }
    else{
        if (grade >= 80 && grade <= 100){
            result = "graduate"
            if (cert >= 3){
                result = result + " with Award"
            }
            else{
                result += " with no award"
            }
        }
        else{
            result = "withdrawal"
        }
    }
    return result;
}

console.log(awardCert(80,2))
console.log(awardCert(75,3))
console.log(awardCert(95,3))


// Switch cases & loops
