// let user = "";
// let passwrod= "tomorrow";

// while(user !== passwrod){
//     user = prompt("Please enter your password");
// }

// alert("login successful");

let number = 5;
let factorial = 1;

// do{
//     factorial = factorial * number;
//     number--;
// } while(number>0);

// console.log("factorial result is: "+factorial);


for (let i = number; number > 0; number--){
    factorial = factorial * number;
}
console.log("the factorial is: " + factorial);