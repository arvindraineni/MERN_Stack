//get input element

let input=document.querySelector("#n")

//get  button
let btn=document.querySelector("button")

function readData(){
    let data=input.value;

    //create h1 element
    let h1= document.createElement("h1")

    //provide content
    h1.textContent = data;
    h1.style.textAlign = "center"

    //append to body
    document.body.appendChild(h1)
}

//add event listener to button
btn.addEventListener('click',readData)