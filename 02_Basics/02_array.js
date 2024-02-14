const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) // existing arrays me arrays push karta hai

// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // ek hi array me sabhi element aa jayenga
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) //Means array ke andar array ko single array return kar dega
// console.log(real_another_array);

// console.log(Array.isArray("Sandeep")) // Ye array hai kya?
// console.log(Array.from("Sandeep")) // Ye sandeep ko array bana dega
// console.log(Array.from({name: "Sandeep"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Ye sabko array me convert kar dega


