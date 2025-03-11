let integer = 10;
let decimal = 10.5;

var weekDays =
  "Monday" +
  "-" +
  "Tuesday" +
  "-" +
  "Wednesday" +
  "-" +
  "Thursday" +
  "-" +
  "Friday";
var weekEnds = "Saturday" + "-" + "Sunday";

var number1 = 10;
var number2 = 5;

console.log("addition:", number1 + number2);
console.log("subtraction:", number1 - number2);
console.log("multiplication:", number1 * number2);
console.log("division:", number1 / number2);
console.log("remainder:", number2 % number1);

console.log("Weekddays:", weekDays);
console.log("Weekends:", weekEnds);

let weekDaysAreFun = false;
let weekEndsAreFun = true;

console.log("Weekdays are fun:", weekDaysAreFun);
console.log("Weekends are fun:", weekEndsAreFun);

let frogs = "The frogs are angry.";

console.log(frogs);
console.log("That sentence was", frogs.length, "characters long.");

var time_elapsed;
var totalprice;

var timeElapsed;
var totalPrice;

var number3 = "53";
var number4 = "44.6";

var convertNumber3 = parseInt(number3);
var convertNumber4 = parseFloat(number4);

console.log("Number 3:", convertNumber3);
console.log("Number 4:", convertNumber4);

var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

var typeOfAnimal = typeof pet;
var typeOfAge = typeof age;
var typeOfDiscount = typeof discountApplied;
var timeLeftToShop = typeof timeLeft;

console.log("Type of animal:", typeOfAnimal);
console.log("Type of age:", typeOfAge);
console.log("Type of discount:", typeOfDiscount);
console.log("Time left to shop:", timeLeftToShop);

var headingText = "Updating heading";

var updatingHeading = document.querySelector("h1");
updatingHeading.innerHTML = headingText;

var bodyColourReplace = document.querySelector("body");
bodyColourReplace.style.backgroundColor = "LightSkyBlue";
