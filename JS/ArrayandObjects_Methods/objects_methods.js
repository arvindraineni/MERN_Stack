let testObj = {
    a:10,
    b:20
}

console.log(testObj)

Object.freeze(testObj)

//modify
testObj.a=200;
console.log(testObj)


//get keys of testObj
let keysArray=Object.keys(testObj)
console.log(keysArray)

//get 