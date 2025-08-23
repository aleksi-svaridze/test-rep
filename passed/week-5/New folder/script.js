// 1. დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.
// const numberArray = [
//   200, 2000, 500, 1000, 300, 55, 45, 100, 100, 3000, 800, 45,
// ];
// const anotherNumberArray = [23, 43, 90, 76, 56, 12, 9];
// const stringsArr = ["cat", "dog", "sheep", "kengoroo", "fox", "crocodile"];

// const sumArrayNumber = (arr) => {
//   // 1 - st option
//   let result = 0;
//   //   for (let i = 0; i < arr.length; i++) {
//   //     result += arr[i];
//   //   }
//   // 2 - nd option
//   for (let arrayItem of arr) {
//     result += arrayItem;
//   }
//   return result;
// };
// console.log(sumArrayNumber(numberArray));
// ===================================================================================================

// 2. დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.
// const findAverageNumber = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(findAverageNumber(numberArray));
// ===================================================================================================

// 3. დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
// const incrementedArray = numberArray.sort((a, b) => a - b);
// console.log(incrementedArray);
// ===================================================================================================

// 4. დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
// const bigNum = (arr) => {
//   let bigest = arr[0];
//   1 - st option
//   for (let n of arr) {
//     if (bigest < n) {
//       bigest = n;
//     }
//   }
//   2 - nd option
//   for (let i = 0; i < arr.length; i++) {
//     if (bigest < arr[i]) {
//       bigest = arr[i];
//     }
//   }
//   3 - rd option
//   let sortedArray = arr.sort((a, b) => a - b);
//   console.log(sortedArray[sortedArray.length - 1]);
//   console.log(bigest);

// };
// bigNum(numberArray);

// 4 - th Option
// console.log(Math.max(...numberArray));

//   5 - th Option
// function largest(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[arr.length - 1];
// }
// ===================================================================================================

// 5. დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.
// const smallNum = (arr) => {
//   let smallest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   console.log(smallest);
// };
// smallNum(numberArray);
// console.log(Math.min(...numberArray));
// ===================================================================================================

// 6. დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.
// let target = 300;
// let found = numberArray.includes(target);
// found
//   ? console.log(`${target} exists in array`)
//   : console.log(`${target} does not exists in array`);

// function exists(target, arr) {
//   let found = arr.includes(target);
//   found
//     ? console.log(`${target} exists in array`)
//     : console.log(`${target} does not exists in array`);
// }
// exists(100, numberArray);
// ===================================================================================================

// 7. დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
// const removeItemFromArray = (arr, item) => {
// 1 - st option
//   let index = arr.indexOf(item);
//   let splicedArray = [...arr];
//   if (index > -1) {
//     splicedArray.splice(index, 1);
//     console.log(`Removed ${item} on index ${index}`);
//   } else {
//     console.log(`${item} does not exists. Returned value is: ${index}`);
//   }
//   return splicedArray;

// 2 - nd option
//   let filteredArray = arr.filter((i) => i !== item);
//   console.log(filteredArray);
// };
// let newArray = removeItemFromArray(numberArray, 800);
// console.log(numberArray, newArray);
// ===================================================================================================

// 8. დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.
// const findElements = (arr, el) => {
//   let count = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === el) {
//       count.push(arr[i]);
//     }
//   }
//   return count;
// };
// let result = findElements(numberArray, 100);
// console.log(result);

// const findEls = (arr, el) => {
//   let newArr = arr.filter((item) => item === el);
//   return newArr;
// };
// console.log(findEls(numberArray, 45));
// ===================================================================================================

// 9. დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი. // Good
// const evenNumbersSum = (arr) => {
//   let result = 0;
//   //   1 - st option

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         result += arr[i];
//       }
//     }
//     return result;

//   //   2 - nd option
//   for (let n of arr) {
//     if (n % 2 === 0) {
//       result += n;
//     }
//   }
//   return result;
// };
// console.log(evenNumbersSum(numberArray));
// ===================================================================================================

// 10. დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.
// const findSecondBigNumberFromArray = (arr) => {
//   let newArr = arr.sort((a, b) => a - b);
//   newArr.pop();
//   let secondBigNum = newArr.pop();
//   return secondBigNum;
// };

// console.log(findSecondBigNumberFromArray(numberArray));
// ===================================================================================================

// 11. დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
// let firstArray = [10000, 500];
// let secondArray = [10000, 500];

// function checkArraysEquality(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     console.log("Equal");
//   } else {
//     console.log("Not equal");
//   }
// }
// checkArraysEquality(firstArray, secondArray);

// function checkArraysEquality(arr1, arr2) {
//   let first = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     first += arr1[i];
//   }

//   let second = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     second += arr2[i];
//   }

//   if (first === second) {
//     console.log(`${first} is equal to ${second}`);
//   } else {
//     console.log(`${first} is not equal to ${second}`);
//   }
// }
// checkArraysEquality(firstArray, secondArray);
// ===================================================================================================

// 12. დაწერეთ პროგრამა რომ ორი სორტირებული მასივი შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.
// const concatSortedArrays = (arr1, arr2) => {
//   let a = arr1.sort((a, b) => a - b);
//   let b = arr2.sort((a, b) => a - b);

//   let concatedArrays = a.concat(b);

//   return concatedArrays.sort((a, b) => a - b);
// };
// console.log(concatSortedArrays(anotherNumberArray, numberArray));
// ===================================================================================================

// 13. დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
// console.log(stringsArr.sort());
// ===================================================================================================

// 14. დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.
// let firstArray = [10000, 200, 600, 400, 500];
// let secondArray = [600, 700, 800, 900, 400, 10000, 500];
// let thirdArray = [101, 102, 600, 104, 10000, 500, 400];
// let forthArray = [10000, 500, 400, 200, 600];

// let allArray = [firstArray, secondArray, thirdArray, forthArray];

// 1 - st method for TWO arrays
// let commonElements = firstArray.filter((item) => secondArray.includes(item));

// 2 - nd method for multiple arrays
// let commonElements = allArray.reduce((a, b) =>
//   a.filter((item) => b.includes(item))
// );

// 3 - rd method for TWO arrays
// const findCommonElementsFromArrays = (arr1, arr2) => {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }
//   console.log(result);
// };
// findCommonElementsFromArrays(firstArray, secondArray);

// 4 - th method for multiple arrays
// function findCommonItemsInArrays(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result = arr.reduce((a, b) => a.filter((item) => b.includes(item)));
//   }
//   console.log(result);
// }
// findCommonItemsInArrays(allArray);

// 5-th method
// function commonElements(arr1, arr2) {
//   let common = [];
//   //   for (let i = 0; i < arr1.length; i++) {
//   //     if (arr2.includes(arr1[i])) {
//   //       common.push(arr1[i]);
//   //     }
//   //   }

//   for (let number of arr1) {
//     if (arr2.includes(number)) {
//       common.push(number);
//     }
//   }

//   return common;
// }

// console.log(commonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
// ===================================================================================================

// 15. შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.
// const car = {
//   company: "Benc",
//   model: "Brabus",
//   year: 2020,
// };
// console.log(car);
// ===================================================================================================

// 16. დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.
// const car = {
//   company: "Benc",
//   model: "Brabus",
//   year: 2020,
//   start: function () {
//     console.log(`The car is starting!`);
//   },
// };
// console.log(car.start());
// ===================================================================================================

// 17. შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.
// const Person = {
//   age: 43,
//   city: "Zemo-kedi",
//   foo: function () {
//     console.log("Another function");
//   },
// };
// console.log(Person.city);
// ===================================================================================================

// 18. დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.
// Person.job = "Developer";
// delete Person.city;
// Person.sentence = function () {
//   console.log("I love coding");
// };
// console.log(Person);
// ===================================================================================================

// ### დავალებები:

// პროექტი 10 - ქულების გამომთვლელი
// შექმენით მარტივი JavaScript პროგრამა, რომელიც ითვლის შეფასებას მოსწავლის ქულების მიხედვით.
// შეფასების სქემა შემდეგნაირია:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// * პროგრამამ უნდა მოსთხოვოს მომხმარებელს შეიყვანოს რიცხვითი ქულა(0-დან 100-ის ჩათვლით ნებისმიერი რიცხვი).
// * გამოიყენეთ პირობითი ოპერატორები შეყვანილი რიცხვის შეფასების დასადგენად.
// * ეკრანზე გამოიტანეთ როგორც შეყვანილი რიცხვი ასევე შესაბამისი ასო.

// მაგალითად:
// ```shell
// > Enter the student's score: 78
// > Student's Score: 78
// > Grade: C
// ```
// let q = Number(prompt("Enter number from 0 to 100"));
// const scoreCounter = (q) => {
//   if (q >= 0 && q <= 100) {
//     if (q >= 0 && q <= 59) {
//       console.log(`Score ${q} - Grade: F`);
//     } else if (q >= 60 && q <= 69) {
//       console.log(`Score ${q} - Grade: D`);
//     } else if (q >= 70 && q <= 79) {
//       console.log(`Score ${q} - Grade: C`);
//     } else if (q >= 80 && q <= 89) {
//       console.log(`Score ${q} - Grade: B`);
//     } else if (q >= 90 && q <= 100) {
//       console.log(`Score ${q} - Grade: A`);
//     }
//   } else {
//     console.log("Enter correct numbers");
//   }
// };
// scoreCounter(q);
// ========================================================================================================================

// პროექტი 11 - Simple Math - მარტივი მათემატიკა
// თქვენ ხშირად დაწერთ პროგრამებს, რომლებიც ეხება რიცხვებს. ხშირად, პროგრამაში მიღებული მონაცემები (input )რიცხვით მონაცემების ტიპებად უნდა გარდაქმნათ. დაწერეთ პროგრამა, რომელიც მოგთხოვთ ორ რიცხვს. ამობეჭდეთ ამ რიცხვების ჯამი, სხვაობა, ნამრავლი და განაყოფი.

// მაგალითად:
// ```shell
// > What is the first number? 10
// > What is the second number? 5
// > 10 + 5 = 15
// > 10 - 5 = 5
// > 10 * 5 = 50
// > 10 / 5 = 2
// ```
// let num1 = Number(prompt("What is the first number?"));
// let num2 = Number(prompt("What is the second number?"));
// const calculateNums = (a, b) => {
//   let sum = a + b;
//   let divided = a / b;
//   let minus = a - b;
//   let multiply = a * b;

//   console.log(
//     `${a} - ${b} = ${minus} \n${a} + ${b} = ${sum} \n${a} * ${b} = ${multiply} \n${a} / ${b} = ${divided}`
//   );
// };
// calculateNums(num1, num2);
// ========================================================================================================================

// ### პროექტი 12 - Einstein - აინშტაინი
// შეიძლება გსმენიათ, რომ E = mc2, სადაც E წარმოადგენს ენერგიას (იზომება ჯოულებში),
//  M წარმოადგენს მასას (იზომება კილოგრამებში), ხოლო C - სინათლის სიჩქარეს (დაახლოებით 300000000 მეტრი წამში).
// ეს ალბერტ აინშტაინის ფორმულაა, რაც არსებითად ნიშნავს, რომ მასა და ენერგია ეკვივალენტურია.

// შექმენით პროგრამა, რომელიც მომხმარებლისგან მასის კილოგრამებში შეყვანას მოითხოვს და დაბეჭდავს
// ამ მასის ეკვივალენტურ რაოდენობას ჯოულში. ეს ორივე რიცხვი უნდა იყოს მთელი (integer).

// მაგალითად:
// ```shell
// > M: 50
// > E: 4500000000000000000
// ```
// * მომხმარებლებისგან მიღებული მნიშვნელობა იქნება სტრიქონის (string) ტიპის. მათემატიკურ გამოთვლებამდე
//  ეს მნიშვნელობები რიცხვებად უნდა გადააქციოთ.
// * შემომავალი (input) და გამომავალი (output) მონაცემები კონვერტაციებისა და სხვა კალკულაციებისგან
//  განცალკევებით უნდა გქონდეთ.
// ===============================================================================================================================

// ### პროექტი 13 - Tip Calculator - "ჩაის" კალკულატორი
// ჩვეულებრივ, რესტორანში სადილის შემდეგ სერვისისთვის "ჩაის" ტოვებენ, როგორც წესი, შეერთებულ შტატებში ეს
// თანხა კვების ღირებულების 15%-ს ან მეტს აღწევს. შექმენით პროგრამა, რომელიც მოითხოვს თანხისა და პროცენტის
// შეყვანას და გეტყვით, რამდენი დოლარი უნდა დატოვოთ "ჩაის" სახით.

// ასევე, პროგრამაში უნდა გქონდეთ ორი ფუნქცია:

// ერთი input-ად მიიღებს სტრიქონს (დაფორმატებულს, როგორც $##.##), თავში შლის $ ნიშანს და აბრუნებს
// თანხას ათწილადის სახით. მაგალითად, 50.00 დოლარის შემთხვევაში მან უნდა დააბრუნოს 50.0

// მეორე ფუნქცია input-ად მიიღებს ასევე სტრიქონს (დაფორმატებულს, როგორც ##%), ბოლოში შლის % ნიშანს
// და აბრუნებს პროცენტს ათწილადის სახით. მაგალითად, თუ input 15%-ია, ფუქცია 0.15-ს დააბრუნებს.

// მაგალითად:
// ```shell
// > How much was the meal? $50.00
// > What percentage would you like to tip? 15%
// > Leave $7.50
// ```

// ### პროექტი 14 - Retirement Calculator - საპენსიო კალკულატორი
// თქვენმა კომპიუტერმა იცის, რომელია მიმდინარე წელი, ამიტომ ეს ინფორმაცია თქვენს პროგრამებში შეგიძლიათ, ჩართოთ. უბრალოდ, უნდა გაარკვიოთ, როგორ შეუძლია თქვენს პროგრამირების ენას ამ მონაცემის თქვენთვის მოწოდება.

// შექმენით პროგრამა, რომელიც მოითხოვს თქვენი ამჟამინდელი ასაკისა და იმ ასაკის შეყვანას, როცა გსურთ, პენსიაზე გახვიდეთ; შემდეგ კი განსაზღვრავს, რამდენი წელი დაგრჩათ პენსიაზე გასვლამდე და კონკრეტულად რომელ წელს შეგიძლიათ ამის გაკეთება.

// მაგალითად:
// ```shell
// > What is your current age? 25
// > At what age would you like to retire? 65
// > You have 40 years left until you can retire.
// > It's 2015, so you can retire in 2055.
// ```

// * კიდევ ერთხელ, კალკულაციებამდე დარწმუნდით, რომ მონაცემები რიცხვით ტიპებში გქონდეთ
// * თქვენს პროგრამაში მიმდინარე წელი ხელით არ ჩაწეროთ. ის თქვენი პროგრამირების ენის საშუალებით, სისტემური დროიდან უნდა მიიღოთ.

// ### პროექტი 15 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი
// გლობალურ გარემოში მუშაობისას, თქვენ მოგიწევთ ინფორმაციის წარდგენა როგორც მეტრულ, ასევე იმპერიულ საზომ ერთეულებში.

// შექმენით პროგრამა, რომელიც ითვლის ოთახის ფართობს. შესთავაზეთ მომხმარებელს ოთახის სიგრძე და სიგანე ფუტებში. შემდეგ აჩვენეთ ტერიტორია როგორც კვადრატულ ფუტში, ასევე - კვადრატულ მეტრში.

// მაგალითად:
// ```shell
// > What is the length of the room in feet? 15
// > What is the width of the room in feet? 20
// > You entered dimensions of 15 feet by 20 feet.
// > The area is
// > 300 square feet
// > 27.871 square meters
// ```

// * კონვერტაციის ფორმულაა: m2 = f2 × 0.09290304

// ### პროექტი 16 - Pizza Party - პიცის წვეულება
// გაყოფა ყოველთვის ზუსტი არ არის და ზოგჯერ ისეთი პროგრამები უნდა დავწეროთ, რომლებშიც ათწილადების ნაცვლად ნაშთი მთელ რიცხვში უნდა გადავაქციოთ. დაწერეთ პროგრამა პიცების თანაბრად გასაყოფად. პროგრამამ input-ებად უნდა მოგთხოვოთ ხალხის რაოდენობა, პიცების რაოდენობა და თითო პიცაზე - ნაჭრების რაოდენობა. ნაჭრების რაოდენობა თანაბარი უნდა იყოს. აჩვენეთ პიცის ნაჭრების რაოდენობა, რომელიც თითოეულმა ადამიანმა უნდა შეჭამოს. თუ ნარჩენები რჩება, დაბეჭდეთ დარჩენილი ნაჭრების რაოდენობა.

// მაგალითად:
// ```shell
// > How many people? 8
// > How many pizzas do you have? 2
// > 8 people with 2 pizzas
// > Each person gets 2 pieces of pizza.
// > There are 0 leftover pieces.
// ```

// * დარწმუნდით, რომ input-ები რიცხვით ტიპებში იყოს.
// * დაამატეთ პროგრამას ფუნქციონალი, რომლითაც output-ში პროგრამა სწორად მართავს მხოლობით და მრავლობით რიცხვს, მაგალითად:
// ```shell
// > Each person gets 2 pieces of pizza.
// > Each person gets 1 piece of pizza.
// ```

// ### პროექტი 17 - Grocery List - სასურსათო სია

// დავუშვათ, რომ თქვენ სურსათის ყიდვამდე ყოველთვის ადგენთ საჭირო ნივთების სიას.

// დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს, შეიყვანოს თითო ნივთი ახალ სტრიქონზე, მანამ, სანამ მომხმარებელი არ დააჭერს "-"-ს. შემდეგ გამოიტანეთ მომხმარებლის სასურსათო სია - დიდი ასოებით, დალაგებული ანბანურად ერთეულის მიხედვით, თითოეულს კი წინ უნდა უძღვოდეს რიცხვი, თუ რამდენჯერ ჩაწერა მომხმარებელმა ეს ნივთი. ნივთების გამრავლება საჭირო არ არის. input-ების  შემთხვევაში, მნიშვნელობა არ აქვს ასოების რეგისტრს.

// მაგალითად:

// ```shell
// < apple
// < banana
// < banana
// < ice cream

// < 1 APPLE
// < 2 BANANA
// < 1 ICE CREAM

// < lettuce
// < tomato
// < tomato
// < carrot
// < tomato

// < 1 CARROT
// < 1 LETTUCE
// < 3 TOMATO
// ```

// ### პროექტი 18 - Adieu, adieu - მშვიდობით, მშვიდობით

// https://www.youtube.com/embed/Qy9_lfjQopU?si=RA6_z9ATk5q18LHS

// The Sound of Music-ში არის სიმღერა, რომელიც ძირითადად ინგლისურადაა შესრულებული, So Long, Farewell - ამ ტექსტით, სადაც "adieu" ფრანგულად ნიშნავს "მშვიდობით":

// Adieu, adieu, to yieu and yieu and yieu

// რა თქმა უნდა, ტექსტი გრამატიკულად სწორი არ არის, რადგან ის ჩვეულებრივ დაიწერება მძიმეებით, როგორც:

// არც "yieu"-ა სიტყვა - ის უბრალოდ, "you"-სთან ირითმება!

// შექმენით პროგრამა, რომელიც სთხოვს მომხმარებელს სახელებს, თითოს თითო ხაზზე, სანამ მომხმარებელი არ დაწერს ტირეს(-). დაუშვით, რომ მომხმარებელი ჩაწერს მინიმუმ ერთ სახელს. შემდეგ "დაემშვიდობეთ" ამ სახელებს, გამოჰყავით ორი სახელი ერთი, ხოლო სამი სახელი - ორი მძიმით და ერთი "და"' კავშირით, როგორც ქვემოთაა მითითებული:

// Adieu, adieu, to Liesl
// Adieu, adieu, to Liesl and Friedrich
// Adieu, adieu, to Liesl, Friedrich, and Louisa
// Adieu, adieu, to Liesl, Friedrich, Louisa, and Kurt
// Adieu, adieu, to Liesl, Friedrich, Louisa, Kurt, and Brigitta
// Adieu, adieu, to Liesl, Friedrich, Louisa, Kurt, Brigitta, and Marta
// Adieu, adieu, to Liesl, Friedrich, Louisa, Kurt, Brigitta, Marta, and Gretl

// მაგალითად:

// ```shell
// < Name: Liesl
// < Name:
// < Adieu, adieu, to Liesl

// < Name: Liesl
// < Name: Friedrich
// < Name:
// < Adieu, adieu, to Liesl and Friedrich

// < Name: Liesl
// < Name: Friedrich
// < Name: Louisa
// < Name:
// < Adieu, adieu, to Liesl, Friedrich, and Louisa
// ```
