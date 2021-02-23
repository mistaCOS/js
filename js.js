// alert("Hello");
// let message;
// message = Hello;
// alert(message);
// let message = "Hello!";
// alert(message);

// let hello = "Hello World";
// let message;
// message = hello;
// alert(hello);
// alert(message);

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// // ...когда нам нужно выбрать цвет
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00

// let name = "John";
// let admin;
// admin = name;
// alert(admin);

// const planetEarth = "Earth";
// let username = "Ivan";

// let str = "Привет";
// let str2 = 'Одинарные кавычки тоже подойдут';
// let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// let name = "Ivan";
// alert(`Hello ${name}`);

// let isGreater = 4 > 1;
// alert(isGreater);

// let age;
// alert(age); // выведет "undefined"

// let age = prompt('Сколько тебе лет?', 100);
// alert(`Тебе ${age} лет!`); // Тебе 100 лет!

// let test = prompt("Test", "");

// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss ); // true, если нажата OK

// let userName = prompt("What is your name?", "");
// alert(userName);

// let age = prompt("Сколько вам лет?","");
// if (age >= 18){
//     alert("ok");
// } else {
//     alert("nope");
// }

// let age = prompt("Сколько вам лет?","");
// let message = (age < 18) ? 'nope' : (age > 18) ? 'ok' : 'ok';
// alert(message); 

// let company = prompt('Какое «официальное» название JavaScript?','');
// if (company == 'ECMAScript'){
//     alert('Yes!');
// }else{
//     alert('Wrong!');
// }

// let num = prompt('Type your number','');
// if (num > 0){
//     alert('1');
// }else if (num < 0){
//     alert('-1');
// }else{
//     alert('0');
// }

// result = (a + b < 4) ? 'Malo' : 'Mnogo';

// let userName = prompt("Кто там?", '');

// if (userName == 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass == 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName == '' || userName == null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }

// let user = {
//     name: "John",
//     surname: "Smith"
// }
// user.name = "Pete";
// delete user.name

// let user = {}
// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }
//   alert(isEmpty(user))
  
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum = 0;
//   for (let key in salaries) {
//       sum += salaries[key];
//   }
//   alert(sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(menu) {
//       for (let key in menu) {
//           if (typeof menu[key] == 'number') {
//               menu[key] *= 2;            
//           }
//       }
//   }
//   alert(menu[key])

// let user = {
//     name: 'Eugene',
//     sayHi() {
//         alert(this.user);
//     }
// };
// user.sayHi();

// let user = {
//     name: "John",
//     money: 1000,
  
//     // для хинта равного "string"
//     toString() {
//  `{name: "${this.name}"}`;
//     },
  
//     // для хинта равного "number" или "default"
//     valueOf() {
//       return this.money;
//     }
    
//   };
  
//   alert(user); // toString -> {name: "John"}
//   alert(+user); // valueOf -> 1000
//   alert(user + 500); // valueOf -> 1500

// let a = prompt('Type a', '');
// let b = prompt('Type b', '');
// let sum = +a + +b;
// alert(sum);

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";
// sayHi();

// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       alert(name);
//     };
//   }
  
//   let name = "John";
  
//   // create a function
//   let work = makeWorker();
  
//   // call it
//   work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)

// ---------------------------------------------------------------------------

// var num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// alert(num);

// let a = 10;
// let b = 2;
// alert(a / b);

// c = 15;
// d = 2;
// let sum = c + d;
// result = sum;
// alert(result);

// let a = 10;
//     b = 2;
//     c = 5;
// alert(a + b + c);    

// let a = 17;
//     b = 10;
//     d = 7;
//     c = a - b;
// result = c + d;
// alert(result);    

// let str = 'Hello World';
// alert(str);

// let str1 = 'Hello, ';
//     str2 = 'World';
// alert(str1 + str2);    

// let name = 'Eugene';
// alert('Hello ' + name);

// let age = 21;
// alert(`Im ${age} years old`);

// let name = prompt('Type your name', ' ');
// alert(`Your name is ${name}`)

// let num = prompt('Type number',' ');
// num = Math.pow(num, 2);
// sqrt = num;
// alert(sqrt);

// let num = '12345';
// alert(num[0] * num[1] * num[2] * num[3] * num[4]);

// let hour = 19;
// let minute = 17;
// let second = 40;
// alert(hour + ':' + minute + ':' + second);

// let arr = ['a', 'b', 'c', 'd'];
// let str1 = arr[0] + arr[1];
// alert(str1)

// let arr = [2, 5, 3, 9];
// let num1 = arr[0] * arr[1];
//     num2 = arr[2] * arr[3];
// result = num1 + num2;
// alert(result);    

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// alert(obj.a)

// let salaries = {
//     Kolya: '1000',
//     Petya: '500',
//     Vasya: '200'
// };
// alert(salaries.Kolya);
// alert(salaries.Vasya);

// let week = {
//     1: 'monday',
//     2: 'tuesday',
//     3: 'monday',
//     4: 'thursday',
//     day: 'friday',
//     6: 'saturday',
//     7: 'sunday'
// };
// alert(week.day);

// let arr = [ 
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
//  ];
//  alert(arr[1][0])

// let obj = {
//     js:['jQuery', 'Angular'], 
//     php: 'hello', css: 'world'
// }
// alert(obj.js[0])

// let lang = {
//     ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
//     en: ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
// };

// function getDayWeek(language, day) {
//     return lang[language][day - 1]
// };
// alert(getDayWeek('en', 6));

// let num = 10
// if (num === 10 ? alert(true) : alert(false));

// let num = '1';
// if (num === 1 ? alert(true) : alert(false));

// let num = 5;
// if (num > 0 && num <= 5 ? alert(true) : alert(false));

// let num = 2;
// num == 0 || num == 2 ? alert(num + 7) : alert(num / 10);

// let a = 6;
// let b = 5;
// if (a <= 1 && b >= 3 ? alert(a + b) : alert(a - b));

// let a = 3;
// let b = 4;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14) ? alert(true) : alert(false));

// let num = 3;
// switch(num) {
//     case 1:
//         result = 'zima';
//     break;
//     case 2:
//         result = 'vesna';
//     break;
//     case 3:
//         result = 'leto';
//     break;            
// }
// alert(result);

// let day = 19;
// if (day < 10) {
//     alert('First decade!');
// }
// if (day >= 10 && day < 20) {
//     alert('Second decade!');
// }
// if (day >= 20) {
//     alert('Third decade!');
// }

// var month = 6;
// if (month == 12 || month <= 2) {
// var result = 'Зима';
// }
// if (month >= 3 && month <= 5) {
// result = 'Весна';
// }
// if (month >= 6 && month <= 8) {
// result = 'Лето';
// }
// if (month >= 9 && month <= 11) {
// result = 'Осень';
// }
// alert(result);

// let str = 'abcde';
// if (str[0] = 'a' ? alert(true) : alert(false));

// let str = '12345';
// (str[0] == '1' || str[0] == '2') ? alert(true) : alert(false);

// let str = '123'
// let sum = +str[0] + +str[1] + +str[2];
// alert(sum);

// let str = '123456';
// let sum1 = +str[0] + +str[1] + +str[2];
// let sum2 = +str[3] + +str[4] + +str[5];
// sum1 === sum2 ? alert(true) : alert(false);

// let i = 1;
// while (i <= 100) {
//     console.log(i);
//     i++
// };
// let i = 11;
// while (i >= 11 && i <= 33) {
//     console.log(i);
//     i++
// }
// for (i = 1; i <= 100; i++) {
//     console.log(i);
// }
// for (i = 11; i <= 33; i++) {
//     console.log(i);
// }
// let i = 2;
// while (i <= 100) {
// if (i % 2 == 0) 
// console.log(i)
// i++
// }

// for (i = 2; i <= 100; i++) {
//     if (i % 2 == 0)
//     console.log(i)
// }

// let arr = [1, 2, 3, 4, 5];
// for ( let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// let result = 0;
// let arr = [1, 2, 3, 4, 5];
// for ( let i = 0; i < arr.length; i++) {
//     result += arr[i]
//     console.log(result)
// }

// let obj = {
//     green: 'зеленый',
//     red: 'красный', 
//     blue: 'голубой'
// }
// for (let key in obj) {
//     console.log(key, obj[key])
// }

// let obj = {
//     Kolya: 200,
//     Vasya: 300,
//     Petya: 400
// }
// for (let key in obj) {
//     console.log(key + ' - запралата ' + obj[key] + ' долларов')
// }

// let a = 10;
// let b = 3;
// let rest = a % b;
// if (rest != 0) {
// 	alert('Делится с остатком ' + rest);
// } else {
// 	alert('Делится, результат деления: ' + (a / b));
// }

// let num = 4;
// function pow(num) {
//     return num * num
// }
// console.log(pow(num))

// let arr = [1,2,3,4,5];
//                 let flag = false;
//                 for (let i = 0; i < arr.length; i++) {
//                     if (arr[i] == 5){
//                         flag = true;
//                         break;
//                     }
//                 }
//                 if (flag == true){
//                     console.log('yes');
//                 }
//                 else{
//                    console.log('no'); 
//                 }

// let num = 31;
// let flag = false;
// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         flag == true;
//         break;
//     }
// }
// if (flag == true) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let arr = [1, 2, 2, 3, 4, 5];
// let flag = false;
// for (i = 1; i < arr.length; i++) {
//     if (arr[i] == arr[i - 1]) {
//         flag = true;
//         break;
//     }
// }
// if (flag == true) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// function func(a, b) {
//     return a == b;
// }
// console.log(func(2, 2))

// function func(a, b) {
//     return a + b > 10;
// }
// console.log(func(5, 6));

// function func(num) {
//     return num < 0;
// }
// console.log(func(2));

// let str = '';
// for (let i = 1; i < 10; i++) {
//     str += i;
// }
// console.log(str);

// let str = '';
// for (let i = 9; i > 0; i--) {
//     str += i;
// }
// console.log(str)

// let arr = [];
// str = 'x';
// for (let i = 0; i < 10; i++) {
//     arr.push(str);
//     str += 'x';
// }
// console.log(arr);

// let arr = [];
// for (i = 1; i < 10; i++) {
//     let str = '';
//     for (j = 0; j < i; j++) {
//         str += i;
//     }
//     arr.push(str);
// }
// console.log(arr);

// function arrayFill(value, length) {
//     let arr = [];
//     for (i = 0; i < length; i++) {
//         arr.push(value);
//     }
//     return arr;
// }
// console.log(arrayFill('x', 5));

// function func(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (sum > 10) {
//             return i + 1;
//         }
//     }
// }
// console.log(func([1, 2, 3, 4, 5, 6, 7, 8]));

// function isNumberInRange(num) {
//     if (num > 0 && num < 10) {
//         return (true);
//     } else {
//         return  (false);
//     }
// }
// console.log(isNumberInRange(5));

// let arr = [2,3,6,7,89,23,45];
// let result = [];
// function isNumberInRange(num) {
//     if (num > 0 && num < 10) {
//         return true;
//     } else {
//         return false;
//     }
// } 
// for (let i = 0; i < arr.length; i++) {
//     if(isNumberInRange(arr[i])) {
//         result.push(arr[i]);
//     }
// }
// console.log(result);

// function getDigitsSum(num) {
// let num = num.toString;
// let sum = 0;
//     for (var i = 0; i < num.length; i++) {
//     sum += Number(num[i]);
//     }
// return sum;
// }
// console.log(getDigitsSum(52))

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 19, 20];
// Array.prototype.multBy = function(n) {
//     return this.map(function(i) {
//         return i * n
//     })
// }
// console.log(arr2.multBy(4));

// function counter() {
//     let i = 1;
//     return function() {
//         return i++
//     }
// };
// let func = counter();
// console.log(func());
// console.log(func());
// console.log(func());

// const delay = ms => {
//     return new Promise(resolve => setTimeout(() => resolve (), ms))
// }
// delay(3000).then(() => console.log('Its 3 sec'))   

const people = [
  { name: 'Владилен', age: 25, budget: 40000 },
  { name: 'Елена', age: 17, budget: 3400 },
  { name: 'Игорь', age: 49, budget: 50000 },
  { name: 'Михаил', age: 15, budget: 1800 },
  { name: 'Василиса', age: 24, budget: 25000 },
  { name: 'Виктория', age: 38, budget: 2300 },
];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

// forEach

// people.forEach(person => console.log(person))

// Map

const newPeople = people.map(people => {
    return console.log(people.age);
})


// Filter


// Reduce


// Find


// FindIndex