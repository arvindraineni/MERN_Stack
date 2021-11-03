let firstNumber = 0;
let secondNumber = 0;


//get values from input fields

function getValues(){
    let fn=document.querySelector("#first")
    let sn=document.querySelector("#second")

    //get values

    //convert fn string to number
    firstNumber=(+fn)
    secondNumber=(+sn)

}


//get buttons
let sumBtn=document.querySelector("#sum")
let diffBtn=document.querySelector("#diff")
let productBtn = document.querySelector("#product")

let result = document.querySelector("#result")


//defined arithmetic operations
function  findSum() {
    getValues ()
    let sum = firstNumber + secondNumber;
    console.log(sum)

    //assign sum to result
    result.textContent =sum;
    
    //add event listener
    sumBtn.addEventListener('click',findSum)
}

