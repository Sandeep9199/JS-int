
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
}
// sayMyName // ye function ka refrence hai 
// sayMyName()

// function addTwoNumbers(number1, number2){ // parameter
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    // return number1 + number2
}

const result = addTwoNumbers(3, 5) // arguments

// console.log("Result: ", result);

// * if function execute the return statement then that function will not work *

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// only return likhne pe function terminate ho jayega 

// console.log(loginUserMessage("Sandeep"))
// console.log(loginUserMessage("Sandeep"))


function calculateCartPrice(val1, val2, ...num1){
    // return num1
}

// interview purpose  
// val1 me 200, val2 me 400 remaining num1 me chala jayega 
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "sandeep",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));