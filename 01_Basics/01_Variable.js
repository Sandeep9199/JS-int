
const accountId = 144553
// accountId = 2 // not allowed because of declaration of const
let accountEmail = "sandeep@google.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;

accountEmail = "sandeep@sharma.com"
accountPassword = "62045344544"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
