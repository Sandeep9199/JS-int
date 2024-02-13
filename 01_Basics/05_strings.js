const name = "sandeep"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sandeep-ss-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__); {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); original string change nhi hogi
// console.log(gameName.charAt(2)); n
// console.log(gameName.indexOf('n')); 2

const newString = gameName.substring(0, 4)
// console.log(newString); sand 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sandeep    "
console.log(newStringOne);
// console.log(newStringOne.trim()); form/email me extra space 

const url = "https://sandeep.com/sandeep%20sharma"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //url ke andar sundar hai? false

console.log(gameName.split('-'));
