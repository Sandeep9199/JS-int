// fetch("something.com").then().catch().finally()

// *new keyword se naya instance mil jata hai
// const promiseOne = new Promise()
// const promiseOne = new Promise(function (resolve, reject) {});

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve(); //Es method ko call karne par .then se connect hoga
  }, 1000);
});

// promise consume ho raha hai or yaha resolve ka connection hai .then ke sath
// .then ke andar ek function milta hai or wo function automatically ek args recieve karta hai jo ki or line 10 t0 14 return karega wo line 19 pe consume hoga
promiseOne.then(function () {
  console.log("Promise consumed");
});

// ab same uper ke jaise kiye hai without variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// resolve ek argunments(Object) recieve kar raha hai.
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // uper ke argunments yaha print ho raha hai
});

// reject ke bare me bhi jaan lo ab
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// chaining
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// async await ke bare me bhi jaan lo
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// jo bhi chize time leti hai usko await syntax lagana jaruri hota hai.

// with use of try catch 
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json(); // yaha response ko json me convert hone time laga isiliye yaha await lagaya 
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();

// same uper ka .fetch .then se banya hua hai 
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap bhi kro.
