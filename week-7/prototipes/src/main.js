// ================================================> Start Rest
// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = arr;
// console.log(a, b, rest);

// function foo(...rest) {
//   console.log(rest);
// }

// foo(1, 2, 3, 4, 5, 7);
// ================================================> end Rest

// ================================================> Start Spread
// let arr = [1, 2, 3, 4, 5];
// let newArr = [6, 7, ...arr];
// console.log([...arr]);
// console.log(...arr);

// let obj = {
//   name: "alex",
//   age: 43,
// };

// let obj2 = { ...obj, gender: "male" };

// console.log(obj2, obj);
// ================================================> End Spread

// ================================================> Start destructuring
// const arr = [1, 2, 3, 4, 5];

// const [a, b, c, d, e] = arr;

// console.log(a, b, c, d, e);

// const obj = {
//   name: "Alex",
//   age: 43,
// };

// const { name: firstName, age: currentAge } = obj;

// console.log(firstName, currentAge);
// ================================================> End destructuring

// const Person = {
//   name: "Alex",
//   age: 43,
//   hobbies: function (job) {
//     let status = job ? "emploeed" : "unemploeed";

//     console.log(`${this.name} is ${this.age} years old and he is ${status}`);
//   },
// };

// let boo = delete Person.age;
// let boo2 = delete Person.hobbies;

// console.log(Person);

// Person.hobbies(false);

// class Rabbit {
//   constructor(type, name, color) {
//     this.type = type;
//     this.color = color;
//     this.name = name;
//   }
// }

// const blackRabbit = new Rabbit("black", "Robbert", "green");

// Object.prototype.speak = function (text) {
//   console.log(
//     `${this.type} rabbit says: ${text}, and I have a ${this.color} eyes`
//   );
// };

// blackRabbit.speak("I am a black rabbit");

// console.log(Object.keys(blackRabbit));
// console.log(Object.values(blackRabbit));
// console.log(Object.entries(blackRabbit));
// for (let key in blackRabbit) {
//   console.log(`${key} - ${blackRabbit[key]}`);
// }

// const protoRabbit = {
//   name: `Default`,
//   speak(text) {
//     console.log(
//       `${this.type} rabbit says: ${text} and I have a ${this.color} eyes`
//     );
//   },
// };

// function letsMakeRabbits(type) {
//   const Rabbit = Object.create(protoRabbit);

//   Rabbit.type = type;

//   return Rabbit;
// }

// const blackRabbit2 = letsMakeRabbits("black");
// blackRabbit2.name = "R";
// blackRabbit2.speak = function () {
//   console.log(`I am a ${this.type} rabbit`);
// };
// blackRabbit2.speak();
// console.log(blackRabbit2);

// const blackRabbit = Object.create(protoRabbit);
// blackRabbit.type = "black";
// blackRabbit.color = "green";
// blackRabbit.name = "Robbert";
// blackRabbit.speak("I am a black rabbit");
// blackRabbit.toString = function () {
//   return JSON.stringify(this);
// };

// console.log(blackRabbit.toString());

// const whiteRabbit = Object.create(protoRabbit);
// whiteRabbit.name = "Stephen";
// whiteRabbit.type = "white";
// whiteRabbit.color = "red";
// whiteRabbit.speak("I am a white rabbit");

// whiteRabbit.toString = function () {
//   return JSON.stringify(this);
// };

// console.log(whiteRabbit.toString());
