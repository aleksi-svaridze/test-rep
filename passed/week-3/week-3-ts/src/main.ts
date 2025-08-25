// 1. დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10-ის ჩათვლით. გამოიყენეთ while და for ციკლები.

// let userPrompt: number = Number(prompt("Enter number"));
// let i: number = 0;

// while (i <= userPrompt) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i <= userPrompt; i++) {
//   console.log(i);
// }
// =====================================================================

// 2. დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.
// let userPrompt: number = Number(prompt("Enter number"));
// let i: number = 0;

// while (i <= userPrompt) {
//   console.log(i);
//   i += 2;
// }
// for (let i: number = 1; i <= userPrompt; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// =====================================================================

// 3. დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!"
// იმდენჯერ რამდენსაც უდრის ეს შეყვანილი რიცხვი.
// let userPrompt: number = Number(prompt("Enter number"));

// for (let i: number = 0; i < userPrompt; i++) {
//   console.log("Hello!");
// }
// =====================================================================

// 4. დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.
// let userPrompt: number = Number(prompt("Enter number"));
// let result: number = 0;

// for (let i: number = 0; i <= userPrompt; i++) {
//   result += i;
// }
// console.log(result);
// =====================================================================

// 5. დაწერეთ პროგრამა, რომელიც გამოთვლის კენტი რიცხვების ჯამს 1-დან 100-მდე და დაბეჭდავს შედეგს.
// let userPrompt = Number(prompt("Enter number"));

// let result = 0;

// for (let i = 0; i <= userPrompt; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     result = result + i;
//   }
// }
// console.log(result);

// 1. step - count from 1 to 100
// let num = 1;

// while (num < 100) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 100; i++) {
//   console.log(i);
// }

// let num = 1;
// do {
//   console.log(num);
//   num++;
// } while (num < 100);

// 2. step - print only odd numbers
// for (let i = 1; i < 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let i = 1;

// while (i < 100) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// do {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// } while (i < 100);

// 3. step - print odd numbers sum
// let num = 0;
// for (let i = 0; i < 100; i++) {
//   if (i % 2 !== 0) {
//     num = num + i;
//   }
// }
// console.log(num); // 2500
// =====================================================================

// 6. დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე.
//  განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.
// let secretNumber = 5;
// let userAnswer = Number(prompt("Enter number"));

// while (userAnswer !== secretNumber) {
//   userAnswer = Number(prompt("Enter number"));
// }

// console.log(userAnswer);
// =====================================================================

// 7. გამოიყენეთ do.. while loop 10-დან 1-მდე დასათვლელად
// let num = 10;

// do {
//   console.log(num);
//   num--;
// } while (num >= 1);
// =====================================================================

// 8. გამოიყენეთ for loop 1-დან 30-მდე 3-ის ჯერადების დასაბეჭდად
// let result = 0;

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     result += i;
//     console.log(result);
//   }
// }
// console.log(result);
// =====================================================================

// 9. გამოიყენეთ for loop  4-იანი ცხრილის დასაბეჭდად (4x1-დან 4x10-მდე)
// let num = 4;
// for (let i = 0; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }
// =====================================================================

// 10. გამოიყენეთ while loop, რათა დაითვალოს სტრიქონში "javascript" სიმბოლოების რაოდენობა და დაბეჭდოს შედეგი
// for (let i = 0; i < "javascript".length; i++) {
//   console.log(`${i + 1} - ${"javascript"[i]}`);
// }
// =====================================================================

// 11 ?. გამოიყენეთ do.. while loop "დიახ" დასაბეჭდად თუ რიცხვი 5-ზე ნაკლებია, "არა" თუ რიცხვი 5-ის ტოლი ან მეტია.
//  რიცხვის შუალედად აიღეთ -10 და 10
// let num = Number(prompt("Enter number"));

// do {
//   if (num < 5) {
//     console.log("Yes!");
//   } else {
//     console.log("No!");
//   }
// } while (num <= 10 || num <= -10);

// =====================================================================

// 12. გამოიყენეთ for ციკლი 20-დან 10-მდცე რიცხვების გამოსატანად
// for (let i = 20; i >= 10; i--) {
//   console.log(i);
// }
// =====================================================================
