// function declaration

function test1(){
    console.log("test1 function called")
}

//function expression

let test2 = function(){
    console.log("test2 function called")
}

//arrow function
let test3 = () => (a,b) => a+b

//calling functions
/*let test3=()=>{
    console.log("test3 called")
}
*/
console.log(test1())
console.log(test2())
console.log(test3(10,20))
