// while loops


// function loop1() {
    

//     // while
//     var steps = 0;
//     var limit = 10;
    
//        while(steps <= limit){
//            console.log(steps + " steps")
//            steps = steps + 1;
//        }
// }

function loop2(){
    var soft_level = 0;
    var limit = 10;
    while(soft_level <= limit){
        console.log("keep chewing..." + soft_level);
        soft_level = soft_level + 1
    }
    console.log("swallow");
}
    loop2()
//     // initialization = solid state - soft level - 0
//     // condition soft level = 10
//     // increment (this is necessary otherwise, you'd have an infinite loop)
// }
// loop2()

function loop3(){
    var steps = 0
    document.getElementById('output').innerHTML = '';
    var limit = document.getElementById('bFood').value
    var foodHolder = 
    '<div class=".bfoodHolder"><img src="/Assignment3/images/nan.jpg" height="100px"></div>'
    while(steps < limit){
        document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + foodHolder
        steps = steps + 1
    }
}
document.getElementById('output').innerHTML = 'erterterte';
loop3()
