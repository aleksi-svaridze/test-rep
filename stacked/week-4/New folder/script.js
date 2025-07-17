// 1. დაწერეთ ფუქნცია, სახელად sayHello, რომელიც დაპრინტავს - "Hello, World".
// function sayHello() {
//   console.log("Hello me");
// }
// sayHello();
// ===========================================================================================================

// 2. დაწერეთ ფუნქცია, სახელად greet, რომელიც პარამეტრა მიიღებს სახელს და დაპრინტავს - "გამარჯობა, [სახელი]"
// function greet(name) {
//   console.log(`Hello, ${name}`);
// }
// greet("Alex");
// ===========================================================================================================

// 3. დაწერეთ ფუნქცია, სახელად sum, რომელიც არგუმენტებად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.
// const sum = (a, b) => {
//   let result = a + b;
//   return result;
// };
// let res = sum(2, 5);
// console.log(res);
// ===========================================================================================================

// 4. დაწერეთ ფუნქცია, სახელად calculateArea, რომელიც არგუმენტად მიიღებს ოთხკუთხედის
//  სიგრესა და სიგანეს და დააბრუნებს მის ფართობს.
//  შედეგი გამოიტანეთ ტერმინალში.

// const calculateArea = (w, h) => {
//   let result = w * h;
//   return result;
// };
// let result = calculateArea(10, 40);
// console.log(result);
// ===========================================================================================================

// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს და დააბრუნებს მათ შორის უდიდესს.
// გამოიყენეთ სამივე - Function Declaration, Function Expression, Arrow Function.
// function bigNumber(a, b) {
//   if (a > b) return a;
//   else if (a < b) return b;
//   else return "Equal";
// }
// console.log(bigNumber(6, 6));

// const bigNumber2 = function (a, b) {
//   if (a > b) return a;
//   else if (a < b) return b;
//   else return "Equal";
// };
// console.log(bigNumber2(4, 7));

// const bigNumber3 = (a, b) => {
//   if (a > b) return a;
//   else if (a < b) return b;
//   else return "Equal";
// };

// console.log(bigNumber3(10, 20));
// ===========================================================================================================

// 6. დაწერეთ ფუქნცია, რომელიც პარამეტრად მიიღებს იმ რაოდენობას, რამდენჯერად უნდა გამოკონსოლდეს "Hello, World".
// function foo(param) {
//   for (let i = 1; i <= param; i++) {
//     console.log(`${i} - Hello me`);
//   }
// }
// foo(8);
// =======================================================================================

// 7. დაწერეთ ფუქნცია, სახელად celsiusToFahrenheit, რომელიც პარამეტრად მიიღებს ცელსიუსს და გადაიყვანს ფარენჰეიტში.
// ფორმულა - (Celsius \* 9/5) + 32
// const celsiusToFahrenheit = (c) => {
//   let result = (c * 9) / 5 + 32;
//   return `${c}C in Fahrenheit is ${result}F`;
// };
// console.log(celsiusToFahrenheit(32));
// ===========================================================================================================

// 8. დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.
// function sumDigits(num) {
//   let str = num.toString();
//   let l = str.length;
//   let result = 0;

//   for (let i = 0; i < l; i++) {
//     result += Number(str[i]);
//   }

//   console.log(result);
// }
// sumDigits(123);
// ========================== Mentors choise ================================ \\
// function sumDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     let remainder = num % 10;
//     sum += remainder;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// console.log(sumDigits(123));

// ===========================================================================================================

// 9. დაწერეთ ფუნქცია სახელად countBs,
//  რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.
// function countBs(str) {
//   let l = str.length;
//   let result = 0;
//   for (let i = 0; i < l; i++) {
//     if (str[i] === "B") {
//       result++;
//     }
//   }
//   console.log(result);
// }
// countBs("BbBbmmmB bnB B m B");
// ===========================================================================================================

// 10. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ პარამეტრს და დააჯამებს ყველა რიცხვს გარკვეულ შუალედში.
//  მაგალითად შეკრიბავს რიცხვებს 5-დან 100-მდე.
// function foo(a, b) {
//   let result = 0;

//   for (let i = a; i <= b; i++) {
//     result += i;
//   }

//   return result;
// }
// console.log(foo(5, 100));
// ===========================================================================================================

// 11. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს true-ს თუ სტრინგი არის პალინდრომი
//  (თავიდან და ბოლოდან იგივენარიად იწერება)
//  და false-ს თუ არაა პალინდრომი.
// function foo(str) {
//   let stringToArray = str.split("");
//   let reversedArray = stringToArray.reverse();

//   let result;

//   for (let i = 0; i < str.length; i++) {
//     if (reversedArray[i] === str[i]) {
//       result = "true";
//     } else {
//       result = "false";
//     }
//   }

//   return result;
// }

// console.log(foo("მადამ"));

// let userPrompt = prompt("Enter string");
// const polyndrome = (param) => {
//   let splitedParam = param.split("").reverse().join("");

//   if (param.includes(splitedParam)) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };
// polyndrome(userPrompt);
// ===========================================================================================================
