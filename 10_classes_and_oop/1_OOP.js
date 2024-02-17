// 1. Object literal 

const user = {
  username: "Sandeep",
  loginCount: 9,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    // console.log(this); // current context 
  },
};

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this); //global this me{} aayega

// 2. Constructor function(About new keyword)

function User(username, loginCount, isLoggedIn) {
  this.username = username; //this.username variable hai 
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true); 
// 'new' keyword se original object ka naya copy(instance) aa jata hai agar new keyword nahi likhoge to purana wala data over write ho jayega 
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);

// About new keyword 
// 1. new keyword use karne par sabse pahle ek empty object create hoga jisko instance bola jata hai

// 2. new keyword ke karan ek constructor function call hota hai 

// 3. this keyword ke karan jitne me arguments hote hai wo inject ho jate hai new wale instance me

// 4. mil jate hai 

// search in mdn instanceOf 