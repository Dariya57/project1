





var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var birthDate = prompt("Enter your age:");
var introduction = "Your name is " + firstName + " " + lastName + ", and you are " + birthDate + "y.o.";
alert(introduction);


var age = prompt("Enter your age:");
var hasLicense = confirm("Do you have a driver's license? (OK for 'yes', Cancel for 'no')");
var canDrive = (age >= 18 && hasLicense);
if (canDrive) {
  alert("You can drive.");
} else {
  alert("You cannot drive.");
}


var number = prompt("Enter a number:");
number = Number(number);
var isEven = (number % 2 === 0);
var isOdd = !isEven;
var isMultipleOf5 = (number % 5 === 0);
var isGreaterThan10 = (number > 10);
alert("You entered: " + number);
alert("Is the number even? " + isEven);
alert("Is the number odd? " + isOdd);
alert("Is the number a multiple of 5? " + isMultipleOf5);
alert("Is the number greater than 10? " + isGreaterThan10);
if (isMultipleOf5 || isGreaterThan10) {
  alert("The number is special!");
}


var numberInput = Number(prompt("Enter a number:"));
var stringInput = prompt("Enter a string:");
var booleanInput = confirm("Is this true? (OK for 'yes', Cancel for 'no')");
alert("Type of number: " + typeof numberInput);
alert("Type of string: " + typeof stringInput);
alert("Type of boolean value: " + typeof booleanInput);


var length = prompt("Enter the length of the rectangle:");
var width = prompt("Enter the width of the rectangle:");
length = Number(length);
width = Number(width);
var area = length * width;
alert("Initial area: " + area);
var update = prompt("What would you like to update? (length or width)");
if (update === "length") {
  length = prompt("Enter the new length:");
  length = Number(length);
} else if (update === "width") {
  width = prompt("Enter the new width:");
  width = Number(width);
}
area = length * width;
alert("New area: " + area);


var colorCount = prompt("How many colors would you like to enter?");
var colors = [];
for (var i = 0; i < colorCount; i++) {
  colors[i] = prompt("Enter color " + (i + 1) + ":");
}
alert("First color: " + colors[0]);
alert("Last color: " + colors[colors.length - 1]);


var name = prompt("Enter your name:");
var age = prompt("Enter your age:");
var hobby = prompt("Enter your hobby:");
var user = {
  name: name,
  age: age,
  hobby: hobby
};
alert("User details: Name: " + user.name + ", Age: " + user.age + ", Hobby: " + user.hobby);


var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
alert("Is the first number greater than the second? " + (firstNumber > secondNumber));
alert("Is the first number less than the second? " + (firstNumber < secondNumber));
alert("Is the first number equal to the second? " + (firstNumber === secondNumber));



var fruitCount = prompt("How many fruits would you like to enter?");
var fruits = [];
for (var i = 0; i < fruitCount; i++) {
  fruits[i] = prompt("Enter fruit " + (i + 1) + ":");
}
fruits.pop();
var newFruit = prompt("Enter a new fruit to add at the beginning:");
fruits.unshift(newFruit);
alert("Updated fruit list: " + fruits);


var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var operation = prompt("Enter an operation (+, -, *, /):");
num1 = Number(num1);
num2 = Number(num2);
var result;
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 === 0) {
    alert("Error: Division by zero!");
  } else {
    result = num1 / num2;
  }
} else {
  alert("Error: Invalid operation!");
}
if (result !== undefined) {
  alert("Result: " + result);
}
