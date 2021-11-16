//find factors of n
//10   1 2 5 10

/*
function findFactors(n){

    let count=1;
    for(let x=1;x<=n;x=x+1){
        let remainder = n %x;
        if (remainder == 0) {
            console.log("factor is ", x)
            count=count+1;
        }
    }

//prime

    if(count==2){
        console.log(`${n} is prime`)
    }
    else{
        console.log(`${n} is not prime`)
    }
}

findFactors(10)

*/

//switch


function arithmeticOperations(a,b,choice){

    switch (choice) {
        case 1: let sum=a+b;
            console.log("sum is ", sum)
            break;
        case 2: let diff = a-b;
            console.log("difference is ", diff)
            break;

        default:
            console.log("Wrong choice")
    }


}

arithmeticOperations(10,20,5)