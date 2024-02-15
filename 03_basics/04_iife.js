// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE, iske function ka naam hai isiliye ye named IIFE hai 
    console.log(`DB CONNECTED`);
})(); // ; important

// *global scope ke variable ke pollution hatane ke liye hamlog IIFE use karte hai 
// At line no 6 We use ; for terminate tha IIFE agar ham aisa nahi karenge to dusra wala IIFE function me error aayega  

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sandeep') // Parameter diya 'sandeep' or wo name me hold ho gaya