const myNums = [1, 2, 3]
// reduce use shopping cart in ecommerce web

// reduce with simple function 
// const myTotal = myNums.reduce(function (acc, curr_val) {
//     console.log(`acc: ${acc} and currval: ${curr_val}`);
//     return acc + curr_val
// }, 0)

// reduce with arrow function 
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);