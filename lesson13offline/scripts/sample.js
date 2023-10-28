console.log ("123"+"12", 123+12);

var firstName = "Nick";
var lasttName = "cole";
var age = 28;
var ismarried = false;

// console.log("nika");
// console.log("nika");
// console.log("nika");
// console.log("nika");

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

var weatherOtside = "sunny";


// != არ უდრის
// || ან ეს ან ის
// && ეს და ის 

// if (weatherOutside === "sunny") {
//     console.log("Go to the market and buy some bread!");
// } else if (weatherOutside === "rainy") {
//     console.log("Go to the magazine but take a coat with you!");
// } else {
//     console.log("I don't get what you wanted to say!");
// }






// if (weatherOtside === "rainy") {
//     console.log("go to the maret");
// } else if (weatherOutside === "rainy") {
//     console.log("Go to the magazine but take a coat with you!");
// } else {
//     console.log("i dont get what you wanted to say");
// }



if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You can't vote yet!");
};



var userInput = prompt("Enter your location");

if (userInput === "tbilisi") {
    alert("Great!, you're close to the event location!")
} else if (userInput === "kutaisi") {
    alert("I guess you'll need some time to get at the event, so be ready for it!");
} else {
    alert("Opps, I guess I don't know this location");
}