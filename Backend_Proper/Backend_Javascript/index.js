// console.log('backend development');
// creating a class in JS
// don't use the var or function keyword in declaration in JS classes
class ClassName{
    classFunction(){
        this.classprop = 'prop string'
        console.log('first class');
    }
}

// to use a class, you create an instance of it because a class is meant to be reusable
// creating class instances
// the new keyword makes it a new object

var c = new ClassName()



// var objName = {
//     prop : null,
//     fun : function(){
//         this.prop = 56;
//         console.log(this.prop)
//     }
// }
// objName.fun()
// console.log(objName.prop)

var num = 1
function glfunction(){
    console.log('global first class')
}