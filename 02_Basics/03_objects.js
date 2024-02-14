// singleton
// Object.create (Singlton)

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sandeep",
    "full name": "Sandeep Sharma",
    [mySym]: "mykey1", // sybmol ka key ke liye ye syntax [] use karte hai
    age: 18,
    location: "Patna",
    email: "sandeep@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser[email]) // error // behind the scene object ke sabhi "key" string ke tarah treat hote hai isiliye niche inko string me convert kiya hai
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // look here koi method nahi is key ke liye jo . se access kar lo 
// console.log(JsUser[mySym]) // yaha JsUser(key) me [] use karne se uska type Symbol rahega agar [] nahi lagaye to uska type string hoga

// console.log(typeof JsUser[mySym])
JsUser.email = "sandeep@chatgpt.com"
// Object.freeze(JsUser) // yaha sandeep@chatgpt.com freeze ho jayega or change nahi hoga means yahi print hoga
JsUser.email = "sandeep@microsoft.com" // ye print nahi hoga
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    // agar same object ko refrence karna hai to this keyword laga lenge or this keyword lagane se object ke andar jitane bhi properties hai uska hamko access mil jayegi
}

console.log(JsUser.greeting); // imp
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());