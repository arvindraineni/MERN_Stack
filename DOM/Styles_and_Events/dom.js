///get elementByID

//get heading element
//let headingElement = document.getElementById("heading")
let headingElement = document.querySelector("#heading")

//apply styles
headingElement.style.color="white"
headingElement.style.backgroundColor="black"
headingElement.style.textAlign="center"

//change content
headingElement.textContent="Content by JS"

//create events
headingElement.addEventListener('click', () => {
    headingElement.textContent="It's Clicked..!!"
    headingElement.style.color = "white"
    headingElement.style.backgroundColor = "blue"

})


