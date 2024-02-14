// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
// console.log(myArr2[1]);

// Array methods

// myArr.push(6) array ke last me add hoga 
// myArr.push(7)
// myArr.pop()

// console.log(myArr);
// myArr.unshift(9) 9 array ke pahle add hoga isame oerations costly hoti hai means pure pahle add hone se pura operations complex hogi...
// myArr.shift() ye bhi pop k tarah hai lekin start se bahar nikalta hai
// console.log(myArr);

// console.log(myArr.includes(9)); // true or false
// console.log(myArr.indexOf(3)); 

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr); // , seperated join string me convert kar deta hai

// slice, splice // interview question as by this 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // original array hi manipulate ho gya hai
console.log(myn2); // range bhi include karta hai