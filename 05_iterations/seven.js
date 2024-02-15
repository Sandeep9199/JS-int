const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map automatically return karta hai 
// const newNums = myNumers.map( (num) => { return num + 10}) // scope{} open then use return keyword

const newNums = myNumers
                .map((num) => num * 10 ) // pahla map return
                .map( (num) => num + 1) // dusra map return pahla jo return hua hai wo dusra me jayega
                .filter( (num) => num >= 40) // dusra ka return isme aayega...
console.log(newNums);

