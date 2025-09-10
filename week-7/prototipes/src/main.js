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

// 1. შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.
const Person = {
    firstName: 'Alex',
    lastName: 'Svaridze',
    age: 43
}

// 2. დაამატეთ ობიექტში  ფუნქცია სახელად  sayHello რომელიც დაპრინტავს ობიექტში 
// სახელის value-ს.
Person.printName = function() {
    console.log(`${this.firstName}`)
}
// Person.printName()

// 3. წაშალეთ ასაკის property.
delete Person.age
// console.log(Person)

// 4. დაამატეთ ობიექტში job.
Person.job = 'Web Developer'
// console.log(Person)

// 5. დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.
Person.jobLength = function(){
    console.log(`${this.job} word length is ${this.job.length}`)
}

Person.hi = function(){console.log('Hi')}
// Person.jobLength()

// 6. ამის შემდეგ დაპრინტეთ ობიექტში არსებული მეთოდების რაოდენობა.
function countMethodsInObject(prop) {
    let countFoos = [];

    for(let key in Person) {
        if(typeof Person[key] === 'function') {
            console.log(key)
            countFoos.push(key)
        }
    }
    return countFoos.length
}
console.log(countMethodsInObject(Person))

// 7. დაადგინეთ, აქვს თუ არა ობიექტს gender ფროფერთი. თუ არ აქვს,
//  მაშინ შექმენით მეთოდი რომელიც იმავე ობიექტს gender ფროფერთის შეუქმნის.

function checkMethod (prop) {
    if(Object.hasOwn(prop, 'gender')) {
        return prop.gender
    } else {
        return prop.gender = 'male'
    }
}
// console.log(checkMethod(Person))

// 8. გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property.
for(let value in Person){
    if(typeof Person[value] !== 'function') {
    console.log(Person[value])
    }
}

// 9. გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value. 
for(let key in Person) {
    console.log(Person[key])
}

// 10. გვაქვს სახელების მასივი. შექმენით ობიექტი, სადაც key-value წყვილებად იქნება სახელები და 
// მათი რაოდენობები მასივში.
const names = ['james', 'sames', 'kates', 'james', 'sames', 'sames'];


// 11. შექმენით პროდუქტის პროტოტიპი, რომელსაც ექნება მეთოდი პროდუქტის ფასის საჩვენებლად.
//  პროტოტიპზე დაყრდნობით შექმენით რამდენიმე პროდუქტის ობიექტი, რომელთაც ექნებათ სახელისა და 
//  ფასის ფროფერთები.
// შექმენით კალათის პროტოტიპი რომელზე დაყრდნობითაც შეიქმნება კალათის ობიექტები.
//  კალათის ობიექტში უნდა გვქონდეს მასივი, სადაც შეგვეძლება პროდუქტის ობიექტების დამატება.
//  პროტოტიპშივე უნდა იყოს მეთოდი, რომელიც დაამატებს მასივში ახალ პროდუქტებს და მეთოდი, 
// რომელიც დაითვლის კალათაში არსებული ყველა პროდუქტის ჯამურ ფასს.