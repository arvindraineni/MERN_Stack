//number array
let arr=[12,4,78,65,89,23]

//find all elements less than 30  -> filter

let result = arr.filter(element => element >30 && element < 80) 
/*let result=arr.filter((element)=>{        // arrow functions
    return element <30;
})
*/



console.log(result)


//increment each element by 10

let result1=arr.map(element=>element+10)
console.log(result1)

//iterate arr -> gets index also
arr.forEach((element,index)=> {
    console.log(`element at index ${index} is ${element}`)

})


//find sum of all elements of array  -> reduce
let sum=arr.reduce((accumalator, element) => accumalator + element)
    console.log(`sum of all elements`, sum)

//find small
let small = arr.reduce((accumalator, element) => accumalator < element ? accumalator : element)
console.log("small element is", small)

//ternarary operartor ?: -> similar to ifelse 
let a =10;
let b=20;

a>b ? console.log("a is big") : console.log("b is big")


//search element 12 in array

let result3 = arr.find(element=>element==12)
/*if (result3===undefined){

console.log("Element not found")
}
else
console.log("Element found")
//console.log(result3)
*/

let result4 = arr.find(element => element ===130)
result4 === undefined ? console.log("element not found") : console.log("element found")


//find index

let index = arr.findIndex(element => element ===130)
console.log("index is ", index )

