/*arr = [10,20,30,40,50]

arr.forEach(num => {
    


//create element
let h2Element=document.createElement("p")

//provide content
h2Element.textContent("array")

//append to DOM
document.body.appendChild(h2Element)
})

*/

/*


///creating ul dynamically


//create parent element ul
let ul=document.createElement("ul")

for(let el of arr){

    //create li element dynamically
    let li=document.createElement("li")

    //provide content
    li.textContent=el;

    //append to parent ul
    ul.appendChild(li)
}


*/

//display users in a table

let users=[
    {name:"arvind",age:20,city:"hyderabad"},
    {name:"pooja",age:21,city:"mumbai"},
    {name:"lavanya",age:22,city:"chennai"},
    {name:"prashanth",age:23,city:"hyderabad"},
    {name:"shashi",age:24,city:"hyderabad"},
    {name:"priya",age:22,city:"pune"},
    {name:"varun",age:24,city:"bangalore"}
]

//create table
let table=document.createElement("table")
let thead=document.createElement("thead")
let tbody=document.createElement("tbody")

table.style.width="100%"
table.style.textAlign="center%"
table.style.backgroundColor="black"
table.style.color="white"

//create th elements
for(let k in users[0]){
    let th=document.createElement("th")
    //provide content
    th.textContent=k;
    //append to child
    thead.appendChild(th)

}

//create tr
for(let userObj of users) {
    //create tr
    let tr=document.createElement("tr")
    //create td elements for tr
    for(let k in userObj){
        let td=document.createElement("td");
        //provide content
        td.textContent = userObj[k]
        //append to tr
        tr.appendChild(td)
    }
    //append tr to tbody
    tbody.appendChild(tr)
}


//append thead and tbody to table
table.appendChild(thead)
table.appendChild(tbody)
