//declare a number array
/*let numbers = [10,20,30,40]
let names = ["shashi","akhil"]
console.log(typeof numbers)
console.log(typeof names)

for(let index=0; index <= numbers.length; index = index +1){
console.log(numbers[index])
}

console.log("length is ", numbers.length)

*/
function getEvenNumbers(numberArray){
    for(let index=0;index<numberArray.length;index=index+1){
        let result=numberArray[index]%2;
        if(result==0){
            console.log(`${numberArray[index]}`)
        }
    }
}
getEvenNumbers([10,12,13,14,15])