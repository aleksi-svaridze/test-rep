// // 1. დაწერეთ პროგრამა რომელიც კონსოლში გამოიტანს "Hello World" -ს.
// let hi: string = "Hello World";
// console.log(hi);

// // 2. შექმენით ცვლადი და მიანიჭეთ მას რიცხვი. დაბეჭდეთ ცვლადის მნიშვნელობა.
let age: number = 43;
console.log(age);

// // 3. დაწერეთ პროგრამა ორი რიცხვის შესაკრებად და შედეგის გამოსატანად.
let x: number, y: number, sum: number;
x = 10;
y = 30;
sum = x + y;
console.log(sum);

// // 4. დაწერეთ პროგრამა რომელიც გამოაკლებს ორ რიცხვს ერთმანეთს და აჩვენებს შედეგს.
let minus: number = x - y;
console.log(minus);

// // 5. დაწერეთ პროგრამა ორი რიცხვის გასამრავლებლად და შედეგის გამოსატანად.
let multiply: number = x * y;
console.log(multiply);

// // 6. დაწერეთ პროგრამა ორი რიცხვის გასაყოფად და შედეგის გამოსატანად.
let divided: number = x / y;
console.log(divided);

// // 7. დაწერეთ პროგრამა ორი რიცხვის გაყოფის ნაშთის გამოსათვლელად.
let persentage: number = x % y;
console.log(persentage);

// // 8. შექმენით ცვლადი და მიანიჭეთ მას სტრიქონი. ამობეჭდეთ სტრიქონის სიგრძე.
let str: string = "Hello Me";
let lengthOfStr: number = str.length;
console.log(lengthOfStr);

// // 9. დაწერეთ პროგრამა ორი სტრიქონის შესაერთებლად და შედეგის ჩვენების მიზნით.
let thanks: string = "thanks";
console.log(str + ", " + thanks);

// // 10. დაწერეთ პროგრამა სტრიქონის დიდ ასოებზე გადასაყვანად.
let uppercaseText: string = str.toUpperCase();
console.log(uppercaseText);

// // 11. დაწერეთ პროგრამა სტრიქონის მცირე ასოზე გადასაყვანად.
let lowercaseText: string = str.toLowerCase();
console.log(lowercaseText);

// 1. დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება, რომელ წელს დაიბადა და გამოთვლის მის ასაკს
let userPrompt: number = Number(prompt("Enter your date of birthday"));
let currentDate: number = new Date().getFullYear();
let result: number = currentDate - userPrompt;
console.log(result);

// 2. დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება ორ რიცხვს და დაითვლის მათ ჯამს, სხვაობას, ნამრავლს და გაყოფას.
let userPrompt1: number = Number(prompt("Enter first number"));
let userPrompt2: number = Number(prompt("Enter second number"));
let sum1: number = userPrompt1 + userPrompt2;
console.log(sum1);

// 3. დაწეწრეთ პროგრეამა, რომელიც მომხმარებელს შეაყვანინებს წრის რადიუსს და დაითვლის წრის ფართობს
let userPrompt3: number = Number(prompt("Enter sircle radius"));
let p: number = Math.PI * (userPrompt3 + userPrompt3);
console.log(p);
