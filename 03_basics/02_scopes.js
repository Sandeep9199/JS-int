//var c = 300
// {} hi scope hota hai 

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "sandeep"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);
//     two()
// }

// one()


if (true) {
    const username = "sandeep"
    if (username === "sandeep") {
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);
// closure properties 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// ++++++++++++++++++ interesting ++++++++++++++++++

// console.log(addone(5))

// function addone(num){
//     return num + 1
// }

// addTwo(5) // function Hoisting 
// const addTwo = function(num){
//     return num + 2
// }
