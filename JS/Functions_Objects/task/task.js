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

let product = {
    number: 34,
    name: 'jeans',
    brand: 'denim',
    price: 2345,
    discount: 20,
    

    getdiscountprice:function(){

        let discount=this.price*this.discount/100;
        console.log("discount:", this.discount)
        return discount;

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