// 1. დაწერეთ ფუქნცია, სახელად sayHello, რომელიც დაპრინტავს - "Hello, World".
// function sayHello() {
//   console.log("Hello me");
// }
// sayHello();
// ===========================================================================================================

// 2. დაწერეთ ფუნქცია, სახელად greet, რომელიც პარამეტრად მიიღებს სახელს და დაპრინტავს - "გამარჯობა, [სახელი]"
// function greet(name) {
//   console.log(`Hello, ${name}`);
// }
// greet("Alex");

// function greet(name) {
//   if (!name) {
//     return "გამარჯობა, უცნობო";
//   }
//   return `გამარჯობა, ${name}`;
// }

// function greet(name = "უცნობო") {
//   return `გამარჯობა, ${name}`;
// }
// console.log(greet("AlgoUni"));
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

// function declaration

// function max(a, b) {
//   if (a > b) {
//     return a;
//   }
//   return b;
//   return a > b ? a : b;
//   return Math.max(a, b);
// }

// function expression
/*
const max = function (a, b) {
  return a > b ? a : b;
};
*/

// arrow function
/*
const max = (a, b) => (a > b ? a : b);
*/

// console.log(max(-15, 10));
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

// 12. დაწერეთ ფუნქცია, რომელიც მომხმარებელს შეეკითხება, რომ გამოიცნოს რანდომული საიდუმლო რიცხვი
// 0-დან 100-მდე მანამ სანამ სწორად არ გამოიცნობს მომხმარებელი. თუ შემოყვანილი რიცხვი საიდუმლო რიცხვზე მეტია,
//  უნდა დავუკონსოლოთ "Too High", ხოლო თუ ნაკლებია - "Too Low".
// გამოცნობის შემთხვევაში უნდა დავპრინტოთ "You got it!" და
//  დავაბრუნოთ რიცხვი.

// let generateRandomNumber = Math.trunc(Math.random() * 100);

// function guess(randomNmunber) {
//   let userAnswer;
//   do {
//     userAnswer = Number(prompt("Enter number from 0 to 100"));

//     if (userAnswer < 0 || userAnswer > 100) {
//       console.log("Enter correct number!");
//       continue;
//     }
//     if (userAnswer > randomNmunber) {
//       console.log("Too Low");
//     } else if (userAnswer < randomNmunber) {
//       console.log("Too high");
//     } else {
//       console.log("You got it!");
//     }
//   } while (userAnswer !== randomNmunber);
// }
// guess(generateRandomNumber);

// let answer = Number(prompt("Enter number from 1 to 10"));

// do {
//   if (answer > 10 || answer < 0) {
//     answer = Number(prompt("Enter correct number!"));
//   }
//   answer = Number(prompt("Try again"));
// } while (answer !== 5);

// console.log("Congrats!");

// ============================ Mentors Choice ============================== \\

// const generateRandomNumber = () => Math.floor(Math.random() * 100);

// function guess() {
//   let randomNumber = generateRandomNumber();
//   let userNumber;
//   do {
//     userNumber = Number(prompt("Enter the number: "));
//     if (userNumber < 0 || userNumber >= 100) {
//       console.log("Wrong number range");
//     } else if (userNumber > randomNumber) {
//       console.log("Too High, try lower");
//     } else if (userNumber < randomNumber) {
//       console.log("Too Low, try higher");
//     } else {
//       console.log(`You Got it, random number was ${randomNumber}`);
//     }
//   } while (userNumber !== randomNumber);
// }

// guess();
// ===========================================================================

// ### პროექტი 2 - Counting the Number of Characters - სიმბოლოების რაოდენობის დათვლა

// შექმენით პროგრამა, რომელიც მოგთხოვთ სიტყვის ან წინადადების (string) შეყვანას და შემდეგ გიჩვენებთ,
// თუ რამდენი სიმბოლოსგან შედგება თქვენი ჩანაწერი.

// მაგალითად:

// ```shell
// > What is the input string? Homer
// > Homer has 5 characters.
// ```

// მინიშნება: გამოიყენეთ `console.log` და `prompt` ფუნქციები; გაიხსენეთ, რომ string-ს აქვს საკუთარი მეთოდები,
// რომლიდანაც შესაძლოა, რომელიმე გამოგადგეთ

// function countChars() {
//   let userPrompt = prompt("What is the input string? ");

//   let answer = userPrompt.trim().length;
//   console.log(`${userPrompt.trim()} has ${answer} characters`);
// }

// countChars();

// ==============================================================================

// ### პროექტი 3 - Printing Quotes - ციტატების ბეჭდვა

// ბრჭყალები ხშირად სტრიქონის (string) დასაწყისისა და დასასრულის აღსანიშნავად გამოიყენება,
// მაგრამ ზოგჯერ, ე.წ. escape characters-ის დახმარებით, ამ წინადადებაში ციტატა ცალკე, ისევ ბრჭყალებით უნდა გამოვყოთ.
// შექმენით პროგრამა, რომელიც მოგთხოვთ ციტატისა და მისი ავტორის ჩაწერას, შემდეგ კი გაჩვენებთ ორივეს ისე, როგორც მაგალითშია.

// მაგალითად:

// ```shell
// > What is the quote? These aren't the droids you're looking for.
// > Who said it? Obi-Wan Kenobi
// > Obi-Wan Kenobi says, "These aren't the droids you're looking for."
// ```

// მინიშნება: გამოიყენეთ `console.log` და `prompt` ფუნქციები; `escape characters`

// function printQuotes() {
//   let quotes = prompt("What is the quote?");
//   let author = prompt("Who said it?");

//   console.log(`${author} said: '${quotes}'`);
// }

// printQuotes();
// ==============================================================================

// ### პროექტი 4 - Indoor Voice - ჩუმი ხმა

// შექმენით პროგრამა, რომელიც მოგთხოვთ სტრიქონის ჩაწერას და შემდეგ იმავე ჩანაწერს მხოლოდ პატარა ასოებით გაჩვენებთ.
// პუნქტუაცია და სიმბოლოებს შორის სივრცეები (whitespace) უცვლელი უნდა დარჩეს.

// მაგალითად:

// ```shell
// > HELLO, WORLD
// > hello, world
// ```

// მინიშნება: გამოიყენეთ `console.log` და `prompt` ფუნქციები; გაიხსენეთ, რომ string-ს აქვს მეთოდები,
// რომელიც შესაძლოა, გამოგადგეთ

// function indoorVoice() {
//   let userPrompt = prompt("Enter some sentens in uppercase register").trim();

//   console.log(`${userPrompt.toLowerCase()}`);
// }

// indoorVoice();
// ==========================================================================

// ### პროექტი 5 - Playback Speed - საუბრის სიჩქარე

// ზოგიერთი ადამიანი ლექციებს საკმაოდ სწრაფად კითხულობს;
// მათი შენელება ან თუნდაც, სიტყვებს შორის პაუზის გაკეთება კარგი იქნებოდა...
// შექმენით პროგრამა, რომელიც წინადადების ჩაწერას მოგთხოვთ, შემდეგ კი იმავე ჩანაწერს გაჩვენებთ,
//  ოღონდ იმ განსხვავებით, რომ ამჯერად ასოებს შორის ყველა სივრცე (whitespace) მრავალწერტილით (...) იქნება ჩანაცვლებული.

// მაგალითად:

// ```shell
// > This is AlgoUni.
// > This...is...AlgoUni.
// ```

// მინიშნება: გამოიყენეთ `console.log` და `prompt` ფუნქციები; გაიხსენეთ, რომ string-ს აქვს მეთოდები, რომელიც შესაძლოა,
//  გამოგადგეთ

// function playbackSpeed() {
//   let userPrompt = prompt("Write some sentence:");
//   console.log(`${userPrompt.replaceAll(" ", "...")}`);
// }

// playbackSpeed();
// ===========================================================================================

// ### პროექტი 6 - Making Faces - სახეების მიღება

// emoji-მდე არსებობდა emoticon-ები, სადაც სიმბოლოების ერთობლიობა - ":)" გაღიმებულ სახეს აღნიშნავდა,
//  ხოლო ":(" - მოწყენილს. დღეს პროგრამებში ეს სიმბოლოები emoji-დ ავტომატურად გარდაიქმნება.

// შექმენით პროგრამაში, სადაც დაწერთ ფუნქციას სახელწოდებით convert,
// რომელიც პარამეტრად იღებს სტრიქონს (str),
// შემდეგ კი იმავე სტრიქონს აბრუნებს, იმ განსხვავებით, რომ ნებისმიერ ამგვარ ჩანაწერს - ":)" 🙂-ით, ხოლო ":(" - 🙁-ით შეცვლის.
//  დანარჩენი ტექსტი უცვლელი უნდა დარჩეს.

// იმავე პროგრამაში, დაწერეთ მეორე ფუნქცია - main, რომელიც სტრიქონის შეყვანას გთხოვთ,
// შემდეგ convert ფუნქციას იძახებს და ბოლოს, შედეგს გაჩვენებთ.

// მაგალითად:

// ```shell
// > hello :)
// > hello 🙂
// > goodbye :(
// > goodbye 🙁
// ```

// მინიშნება: გამოიყენეთ `console.log` და `prompt` ფუნქციები;
// გაიხსენეთ, რომ string-ს აქვს მეთოდები, რომელიც შესაძლოა, გამოგადგეთ; არ დაგავიწყდეთ ფუნქციის გამოძახება
// let userPrompt = prompt("Enter some sentence:");
// function convert(str) {
//   if (str.includes(":)")) {
//     return str.replaceAll(":)", "🙂");
//   } else if (str.includes(":(")) {
//     return str.replaceAll(":(", "🙁");
//   } else {
//     return str;
//   }
// }

// function main(str) {
//   let output = convert(str);
//   console.log(`${output}`);
// }

// main(userPrompt);
// =========================================================================================================

// ### პროექტი 7 - თამაში Mad Libs

// Mad libs არის მარტივი თამაში, სადაც თქვენ ქმნით ამბის შაბლონს ცარიელ სიტყვებთან ერთად. მოთამაშე ადგენს სიტყვების სიას და მოთხრობაში განათავსებს, შედეგად კი ხშირად სულელურ ან სასაცილო ამბავს ვიღებთ.
// შექმენით მარტივი პროგრამა, რომელიც ითხოვს არსებით სახელს, ზმნას, ზმნიზედას და ზედსართავ სახელს და ამ სიტყვებს თქვენივე შექმნილ ისტორიაში სვამს.

// მაგალითად:

// ```shell
// > Enter a noun: dog
// > Enter a verb: walk
// > Enter an adjective: blue
// > Enter an adverb: quickly
// > Do you walk your blue dog quickly? That's hilarious!

// function madlabs() {
//   let noun = prompt("Enter a noun:");
//   let verb = prompt("Enter a verb:");
//   let adjective = prompt("Enter an adjective:");
//   let adverb = prompt("Enter an adverb:");

//   console.log(
//     `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious?`
//   );
// }

// madlabs();
// ==========================================================================================================
