// 1 + . დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
// let userPrompt: number = Number(
//   prompt("Enter number to guess it is EVEN or ODD")
// );

// if (userPrompt < 0) {
//   console.log("Wrong input!");
// } else if (userPrompt % 2 === 0) {
//   console.log("EVEN");
// } else {
//   console.log("ODD");
// }
//  ===================================================================================================

// 2 +. დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
// let userPrompt: string | null = prompt("Enter some word");

// if (userPrompt === null) {
//   console.log("Enter some word");
// } else if (userPrompt.trim().length === 0) {
//   console.log("Empty");
// } else {
//   console.log("Not empty");
// }
// =====================================================================================================

// 3 + . დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შესაბამის შეფასებას.
// 91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. გამოიყენეთ ორივე - if/else if/else და switch.

// let user: number = Number(prompt("Enter your score"));
// let score: string;

// if (user < 0 || user > 100) {
//   console.log("Enter numbers from 0 to 100");
// } else if (user >= 91 && user <= 100) {
//   console.log("A");
//   score = "A";
// } else if (user >= 81) {
//   console.log("B");
//   score = "B";
// } else if (user >= 71) {
//   console.log("C");
//   score = "C";
// } else if (user >= 61) {
//   console.log("D");
//   score = "D";
// } else if (user >= 51) {
//   console.log("E");
//   score = "E";
// } else if (user >= 0) {
//   console.log("Failed");
//   score = "Failed";
// } else {
//   console.log("something else");
// }

// switch (true) {
//   case user < 0 || user > 100:
//     console.log("Enter numbers from 0 to 100");
//     break;
//   case user >= 91 && user <= 100:
//     console.log("A");
//     break;
//   case user >= 81:
//     console.log("B");
//     break;
//   case user >= 71:
//     console.log("C");
//     break;
//   case user >= 61:
//     console.log("D");
//     break;
//   case user >= 51:
//     console.log("E");
//     break;
//   case user >= 0:
//     console.log("Failed");
//     break;
//   default:
//     console.log("something else");
// }
// =====================================================================================================

// 4 + . დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
// let userPrompt: number = Number(prompt("Enter some number"));
// if (userPrompt > 0) console.log(`Entered number ${userPrompt} is POSITIVE`);
// else if (userPrompt < 0)
//   console.log(`Entered number ${userPrompt} is NEGATIVE`);
// else console.log(`Enter positive or negative number`);

// userPrompt > 0
//   ? console.log("P")
//   : userPrompt < 0
//   ? console.log("N")
//   : console.log("Z");
// =======================================================================================================

// 5 + . დაწერეთ პროგრამა, რათა შეამოწმოთ იყოფა თუ არა რიცხვი სხვა რიცხვზე.
// let userPrompt: number = Number(prompt("Enter first number"));
// let secondPrompt: number = Number(prompt("Enter second number"));
// let division: number;
// if (userPrompt % secondPrompt === 0) {
//   division = userPrompt / secondPrompt;
//   console.log(
//     `Entered number ${userPrompt} can be divided by ${secondPrompt} and is ${division}`
//   );
// } else {
//   division = userPrompt / secondPrompt;
//   console.log(
//     `Entered number ${userPrompt} can not be divided by ${secondPrompt}. ansver is - ${division}`
//   );
// }
//=====================================================================================================================================================================

// 6 + . დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.
// let userPrompt: string | null = prompt("Enter some word");
// userPrompt?.includes("!") ? console.log(true) : console.log(false);
// ========================================================================================================================================================================

// 7 . დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.
// let num1: number = Number(prompt("Enter first number"));
// let num2: number = Number(prompt("Enter second number"));

// if (num1 > num2) {
//   console.log(num2);
// } else if (num2 > num1) {
//   console.log(num1);
// } else {
//   console.log("=");
// }
// =======================================================================================================================================================================

// 8. დაწერეთ პროგრამა, რომ იპოვოთ მაქსიმალური ორი რიცხვიდან.
// let num1: number = Number(prompt("Enter first number"));
// let num2: number = Number(prompt("Enter second number"));

// if (num1 > num2) {
//   console.log(num1);
// } else if (num2 > num1) {
//   console.log(num2);
// } else {
//   console.log("=");
// }
// =======================================================================================================================================================================

// 9. დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება თავის ასაკს და დაადგენს არის თუ არა 18 წლის ან უფრო მეტის.
//  თუ არის, გამოპრინტეთ "Adult", თუარადა - "Minor".
// let age: number = Number(prompt("Enter your age"));

// if (age <= 0) {
//   console.log("Enter your real age");
// } else if (age < 18) {
//   console.log("Minor");
// } else {
//   console.log("Adult");
// }
// ===========================================================================================================================================================================

// 10. დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F)
//  ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად,
//  თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"
// let userPrompt: string | undefined = prompt(
//   "Enter A, B, C, D, E, F"
// )?.toUpperCase();

// switch (userPrompt) {
//   case "A":
//     console.log("A");
//     break;
//   case "B":
//     console.log("B");
//     break;
//   case "C":
//     console.log("C");
//     break;
//   case "D":
//     console.log("D");
//     break;
//   case "E":
//     console.log("E");
//     break;
//   case "F":
//     console.log("F");
//     break;
//   default:
//     console.log("Enter correct letters");
// }
// ===========================================================================================================================================================================
// 11. დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.)
//  და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

// let userPrompt: number = Number(prompt("Enter numbers from 1 to 12"));

// switch (userPrompt) {
//   case 1:
//     console.log("January has 31 days");
//     break;
//   case 2:
//     console.log("February has 28-29 days");
//     break;
//   case 3:
//     console.log("March has 31 days");
//     break;
//   case 4:
//     console.log("April has 30 days");
//     break;
//   case 5:
//     console.log("May has 31 days");
//     break;
//   case 6:
//     console.log("June has 30 days");
//     break;
//   case 7:
//     console.log("July has 31 days");
//     break;
//   case 8:
//     console.log("August has 31 days");
//     break;
//   case 9:
//     console.log("September has 30 days");
//     break;
//   case 10:
//     console.log("Octomber has 31 days");
//     break;
//   case 11:
//     console.log("November has 30 days");
//     break;
//   case 12:
//     console.log("December has 31 days");
//     break;
//   default:
//     console.log("Enter only numbers");
// }

// switch (userPrompt) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30");
//     break;
//   case 2:
//     console.log("28 - 29");
//     break;
//   default:
//     console.log("Enter only numbers from 1 to 12");
// }
