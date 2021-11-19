//create a studebt object

/*let student = {
    rollNo:544,
    name:'Arvind',
    age:23,
}



//iterate student obj
for (let k in student) {
    console.log(student[k])

    console.log(`${k} is ${student[k]}`)
}
*/

let employee = {
    eno: 100,
    name: 'arvind',
    addresses: [
    {
        tempaddr:{
            doorNo: 123,
            street: "Ramanthapur",
            city: "Hyderabad"
        }
    }, 
    {
        permnaddr:{
            doorNo:234,
            street: "Indranagar",
            city: "Hyderabad"
        }

    }],
    skills: ["Javascript", "NodeJS", "ReactJS"],
    score: [60,79,50],

    getAverage:function(){

        let average=this.score[0]+this.score[1]+this.score[2]/3;
        //console.log("eno:", this.eno)
        return average;

    }
}
//let average = employee.getAverage();
//console.log("average :", average)


//console.log("Address :", employee.address.city)
//console.log("Skills :", employee.skills[1])















/*
let arr = [10, 20, 30]
console.log(typeof student)
console.log(typeof arr)

console.log(arr)
console.log(student)
*/

/*
console.log("Roll no :", student.rollNo)
console.log("Name :", student.name)
console.log("Name :", student.mobile)

//adding new properties
student.city = 'Hyderabad'
console.log("After adding city :", student)

//update age
student.age = 22
console.log("After modification ;", student)

//delete age

delete student.age;
console.log("After deletion : ", student) */