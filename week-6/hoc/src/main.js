// const sum = (arr) => {
//   let sum = 0;
//   for (let n of arr) {
//     sum += n;
//   }
//   return sum;
// };

// const range = (s, e) => {
//   let arr = [];
//   for (let i = s; i <= e; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// // console.log(sum(range(2, 10)));

// const repeat = (n, action) => {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// };

// const labels = [];
// repeat(10, (i) => {
//   labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

// const filterArrays = (arr, test) => {
//   let filteredArray = [];

//   for (let number of arr) {
//     if (test(number)) {
//       filteredArray.push(number);
//     }
//   }

//   return filteredArray;
// };

// console.log(
//   filterArrays([2, 4, 3, 1, 6, 5, 8, 9, 10, 12], (number) => number % 2 === 0)
// );

// console.log(
//   [2, 4, 3, 5, 6, 7, 4, 8, 0, 9, 10].filter((number) => number % 2 === 0)
// );

// const users = ["Alice", "Bob", "Charlie", "David"];
// const searchTerm = "a";
// console.log(users.filter((user) => user.toLowerCase().includes(searchTerm)));

// const employees = [
//   { name: "John", department: "Sales" },
//   { name: "Jane", department: "Marketing" },
//   { name: "Peter", department: "Sales" },
// ];
// const salesTeam = employees.filter(
//   (employee) => employee.department === "Sales"
// );
// console.log(salesTeam);
// [{ name: 'John', department: 'Sales' }, { name: 'Peter', department: 'Sales' }]

// const someArr = [2, 4, 3, 6, 8, 90, 12, 34, 45];
// const transformedArr = [];

// for (let i = 0; i < someArr.length; i++) {
//   transformedArr[i] = someArr[i] * 2;
// }

// function transform(el) {
//   return el * 2;
// }

// function mapArray(arr, foo) {
//   const mappedArray = [];

//   for (let el of arr) {
//     mappedArray.push(foo(el));
//   }

//   return mappedArray;
// }

// console.log(mapArray([12, 34, 56, 23, 89], transform));

// const numbersArr = [23, 45, 34, 12, 67, 89, 78, 38];

// numbersArr.forEach((el, i) => console.log(el, i));
