//statements

/*let a=10;
let b=20;

if(a>b){   // if 
    console.log("a is greater than b ")
}
else{
    console.log("b is greater than a")
}
*/
function findBig(a,b) {  // else-if
    if (a>b) {
        return "a is big"
    }
    else {
        return "b is big"
    }
}

let result = findBig(10,11)
console.log(result)