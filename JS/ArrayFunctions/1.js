//declare array
let arr = [10,20,30];

console.log("initial arr", arr)
 //add elements to end of array
 let newLength = arr.push(40,50)
 console.log('arr after adding new element to end of it', arr)
 console.log("length after adding",arr.length)

 //add elements to beginning
 arr.unshift(1,2)
 console.log('arr after adding new element to start of it', arr)
 console.log("length after adding",arr.length)


 //add 123 to index 2
let removedElements = arr.splice(2, 0, 123, 456)
console.log('arr after adding new element in between', arr)
console.log('removed elements', removedElements)


//remove element from end
let removedElements1=arr.pop()
console.log("arr after removing from end", arr)
console.log("removed element is", removedElements1)

//remove element from starting
let removedElements2=arr.shift()
console.log("arr after removing from end", arr)
console.log("removed element is", removedElements2)

//remove element in between
let removedElements3=arr.splice(2, 3)
console.log("arr after removing from end", arr)
console.log("removed element is", removedElements3)