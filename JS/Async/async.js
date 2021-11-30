//asyncrhonously
/*
const { reject } = require("async")

setTimeout(() => {
    console.log("from callback function")
}, 5000)

console.log("outside of callback")


console.log("outside of callback")
console.log("One more statement")

//create a promise
let status=true;
let myPromise=new Promise((resolve,reject)=>{
  
    if(status===true){
        resolve("Promise is resolved")
    }
    else{
        reject("sorry..promise is rejected")
    }
})
console.log(myPromise)

//consume promise
myPromise
    .then((data)=>{console.log(data) })
    .catch((err)=>{console.log(err)  })

*/

/*
//promise made by music director
function getMusicReleaseUpdate(status){

    let promiseByMusicDirector=new Promise((resolve,reject)=>{
        if(status==="success"){
            setTimeout(() => {
                resolve("Audio is out...Enjoy!!")
            }, 5000);
        }
        else{
            setTimeout(() => {
                reject("sorry... new date will be announced soon")
                
            }, 5000);
        }
    })
    return promiseByMusicDirector;

}
//consume promise
getMusicReleaseUpdate('success')
.then((data)=>{console.log(data) })
.catch((err)=>{console.log(err) })
console.log("Hello fans..!!")
*/


//promise made by me  to friend
function makecalltofriend(status){

    let promiseByMe=new Promise((resolve,reject)=>{
        if(status==="success"){
            setTimeout(() => {
                resolve("I have called you.")
            }, 30000);
        }
        else{
            setTimeout(() => {
                reject("You haven't called me.")
                
            }, 300002);
        }
    })
    return promiseByMe;

}
//consume promise
makecalltofriend('success')
.then((data)=>{console.log(data) })
.catch((err)=>{console.log(err) })
console.log("Hello friend..!!")

