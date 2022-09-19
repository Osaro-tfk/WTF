// array
// objects //data structure
// json
// localStorage // using array as our database for class example

// arrays
// strings
// dates

// var arrStudents = [''];
// using divs for horizontal alignment, use concatenation (not advised though)
// document.getElementById('studentList').innerHTML = "<div>" + arrStudents[0] + "</div> " + "<div>" + arrStudents[1] + "</div> " + "<div>" + arrStudents[2] + "</div> " + "<div>" + arrStudents[3] + "</div> " + "<div>" + arrStudents[4] + "</div> "

// document.getElementById('studentList').innerHTML = arrStudents.join("<br>");

// arrStudents[idx]

// for (let idx = 0; idx < arrStudents.length; idx++) {
//     const element = arrStudents[index];
// }

// using the array as a database


var arrStudents = [];
var holder = document.getElementById('studentList');

// this function helps to display the values entered in paragraphs 

function showList() {
    holder.innerHTML = "";
    for( i = 0; i < arrStudents.length; i++){
        holder.innerHTML = holder.innerHTML + '<p>' + arrStudents[i] + '</p>'
    }
        
}
showList()

// adding values to an array. This function helps to collect the values entered and store in an array 

function addToList(){
    var studentName = document.getElementById('student')
    arrStudents.push(studentName.value);
    showList()
}

function removeFromList(){
    var studentName = document.getElementById('student')
    arrStudents.pop(studentName.value);
    showList()
}


console.log(arrStudents)