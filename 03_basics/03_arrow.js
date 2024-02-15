// const user = {
//     username: "Sandeep",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }
// *this keyword current context 

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // {} node environment me use karte hai to empty object refer hota hai.

// Agar browser me jakar console.log(this) karte hai to windows objwct aata hai.

function chai(){
    let username = "sandeep"
    console.log(this);
}
chai()

// const chai = function () {
//     let username = "sandeep"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "sandeep"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return ham maan lete hai ki return to hoga hi...
// const addTwo = (num1, num2) => ( num1 + num2 ) // {} me wrap kara to return keyword likhna hi padega but () likha to return nhi likhna padega... this is very useful in react 

// const addTwo = (num1, num2) => ({username: "sandeep"}) // Object ko return kiye hai ({}) wrap kiye hai

// console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()