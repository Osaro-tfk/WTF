//array
//objects   // data structure
//json
//localStorage // database 
//arrays
//strings
//dates

// var arrStudents = [];

// var holder = document.getElementById('studentList');
// var showList = function (){
// holder.innerHTML ='';
//     for(i= 0;i<arrStudents.length;i++)
//     {
//         holder.innerHTML =  holder.innerHTML + '<p>'+arrStudents[i]+'</p> <button onclick="removeStudent('+ i +')">Remove</button> <button onclick="editStudent('+ i +')"> edit</button>'
        
//     }
// }

// showList();

// function addToList(){
//      var studentName = document.getElementById('student')
//     arrStudents.push(studentName.value)
//    showList()
// }
// function removeStudent(idx){
//    arrStudents.splice(idx,1)
//     showList()
// }

// function editStudent(){
//     var editName = document.getElementById('student')
//     editName = holder.innerHTML
//     for(i= 0;i<arrStudents.length;i++){
//         '<p contenteditable=true>'+arrStudents[i]+'</p>'
//     }
    
    
// }


var arrStudents = [];
var holder = document.getElementById('studentList');
var showList = function (){
holder.innerHTML ='';
    for(i= 0;i<arrStudents.length;i++)
    {
        holder.innerHTML += '<p>' + arrStudents[i] + '</p> <button onclick="removeFromList('+ i +')">Remove</button>' + '<button onclick="editList('+ i +')">Edit</button>'
    }
}
showList();
function addToList(){
    var studentName = document.getElementById('student')
    arrStudents.push(studentName.value)
   showList()
}
function removeFromList(idx){
    var studentName = document.getElementById('student')
    arrStudents.splice(idx, 1)
    showList()
}
function editList(idx){
    var studentName = document.getElementById('student')
    arrStudents.splice(idx, 1, studentName.value)
    showList() 
}