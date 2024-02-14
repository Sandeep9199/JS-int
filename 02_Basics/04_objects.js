// const tinderUser = new Object() // object
const tinderUser = {} // ye bhi object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sandeep",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); ? about see docs

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);
const obj3 = Object.assign({}, obj1, obj2, obj4)
//console.log(obj3);// {} optinal hota hai isako dene se ye guaranted hai iska result yahi aayega... { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// About Object.assign() see on mdn docs 

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

users[1].email // Are yaar ye to simple array hi to hai...
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // object ka keys type array me print hoga
// console.log(Object.values(tinderUser)); // object ka value type array me print hoga
// console.log(Object.entries(tinderUser)); // Array ke andar array milega jo ki key value pair ka array [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // simple object ke liye puchh sakte hai kya ye value tumhare pass hai?


// Important for API
const course = {
    coursename: "JS in hindi",
    price: "1995",
    courseInstructor: "Sandeep"
}

// course.courseInstructor

// Destructure Concept
const {} = course; // Q. empty {} me kaha se value exract karni hai? A."course" se karni hai 
//Q. kya value extract karni hai, A. courseInstructor extract karni hai
const {courseInstructor } = course // yaha value mil jayega
const {courseInstructor: instructor} = course // instructure apne hisab se modify kar sakte hai...

// console.log(courseInstructor);
// console.log(instructor);

// JSON 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
 
// API's Array ke form me bhi milti hai ?
[
    {},
    {},
    {}
]

