const getInput = require("./get-input.js");
const fizzy = require("./fizzy-backend.js");

const n = getInput();
const answer = fizzy(n);
console.log(answer);

if(n % 5 === 0 && n % 3 === 0){
    console.log('FizzBuzz');
}else if (n % 3 === 0) {
    console.log("Fizz");
}else if (num % 5 === 0){
    return "Buzz";
}else {
    console.log(n);
}

