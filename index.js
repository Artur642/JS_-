// //1
// const age = 13;
// console.log(age);

// //2
// const myUser ='Artur';
// console.log(myUser);

// //3
// const isStudent = true;
// console.log(isStudent);

// //4
// const myString = "цитата";
// console.log(myString)

// //5
// const myNumber = 4;
// const a = myNumber + 10
// console.log(a);

// //6
// const myNull = null;
// console.log(myNull)

// //7
// const user = prompt("Вкажіть ваше ім'я");
// alert('Вітаю вас, ${user}')

// //8
// const userName = confirm('Чи приймаєте умову?')
// if (userName === true) {
//     alert("Дякую за підтвердження")
// }
// else{
//     alert("Дію відмінено")
// }

// //9
// alert("небезпечна Дія")
// const danger = confirm('Дія небезпечна, ви точно підверджуєте?')
// if (danger === true) {
//     alert("Дякую за підтвердження")
// }
// else{
//     alert("Дію відмінено")
// }
// result= 5 + 5 + '5';
// console.log(result)

// emeil = 'freshshow9999@gmail.com';
// console.log(emeil.includes('freshshow9999@gmail.com'))
// console.log(emeil.length('@'))

// const My = 'My';
// const name = 'name';
// const is = 'is';
// const fullName = My + ' ' + name + ' ' + is + ' ' + 'Viktor' ;
// console.log(fullName)

// let userName = "Олександро";
// let payment = 300;
// alert = `Дякуємо, ${userName}! До сплати ${payment} гривень`;

// function checkFields(){
//     const fieldValue1 = document.getElementById("text-one").value;
//     const fieldValue2 = document.getElementById("text-two").value;

//     if (fieldValue1 !== '' && fieldValue2 !== ''){
//         alert("Обидва поля заповнені");
//     } else {
//         alert("Не всі поля заповнені");
//     }
// }

// function checkSum() {
//     const numberValue1 = parseFloat(document.getElementById("number-one").value);
//     const numberValue2 = parseFloat(document.getElementById("number-two").value);

//     if (numberValue1 + numberValue2 > 10) {
//         alert("Сума більша за 10");
//     } else {
//         alert("Сума менша або дорівнює 10")
//     }
// }

// function checkText() {
//     const inputValue = document.getElementById("textField").value;

//     if (inputValue.includes("JavaScript")){
//         alert("Текст містить слово JavaScript")
//     } else {
//         alert("Текст не містить слово JavaScript")
//     }

// }

// function checkNumder() {
//     const numberInput = parseFloat(document.getElementById("numberInput").value);

//     if(!isNaN(numberInput) && numberInput > 10 && numberInput < 20) {
//         alert( "Число входить в діапазон від 10 до 20")
//     } else {
//         alert("Число не входить в діапазон від 10 до 20")
//     }
// }

// 1
// let i = 1;
// while (i <= 10){
//     console.log(i);
//     i++
// }

// 2
// for (let i = 2; i <= 20; i++){
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 3
// for(let i = 1; i <= 10; i++){
//     let result = 7 * i;
//     console.log(`7 * ${i} = ${result}`)
// }

// 6
// let n = 7;
// for (let i = 1; i < n; i++){
//     if (i > n) {
//         break
//     }
//     console.log(i);
// }

// 7
// let i = 1;
// while( i <= 20) {
//     if (i % 3 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i)
// }


// 1
// function showChoise() {
//     const select = document.getElementById("drinks");
//     const selected = select.options[select.selectedIndex].value;

//     if (selected === "coffee") {
//         alert("Ви вибрали каву")
//     } else if (selected === "tea") {
//         alert("Ви вибрали чай");
//     } else if (selected === "juice") {
//         alert("Ви вибрали сік");
//     }
// }

// 2

// function checkDay() {
//     const inputDay = document.getElementById("inputDay").value;

//     if (
//         inputDay === "понеділок" ||
//         inputDay === "вівторок" ||
//         inputDay === "середа" ||
//         inputDay === "четаверт" ||
//         inputDay === "п'ятниця"
//     ) {
//         alert("Зараз будні дні")
//     } else if (inputDay === "субота" || inputDay === "неділя") {
//         alert("Зараз вихідні")
//     } else {
//         alert("You have problem")
//     }
// }

// 3

// function checkMonth() {
//     const inputMonth = document.getElementById("inputMonth").value;

//     if (inputMonth == 1 || inputMonth == 2 || inputMonth == 12) {
//         alert("It`s winter!")
//     } else if (inputMonth == 3 || inputMonth == 4 || inputMonth == 5){
//         alert("It`s spring!");
//     } else if (inputMonth == 6 || inputMonth == 7 || inputMonth == 8){
//         alert("It`s summer!");
//     } else if (inputMonth == 9 || inputMonth == 10 || inputMonth == 11){
//         alert("It`s autumn!")
//     } else {
//         alert("You have problem")
//     }

// }

// 4

// function inputMonthDay() {
//     const inputMonthDay = document.getElementById("inputMonthDay").value;

//     if (
//         inputMonthDay == 1 ||
//         inputMonthDay == 3 ||
//         inputMonthDay == 5 ||
//         inputMonthDay == 7 ||
//         inputMonthDay == 8 ||
//         inputMonthDay == 10 ||
//         inputMonthDay == 12
//     ) {
//         alert("In this month 31 days");
//     } else if (
//         inputMonthDay == 4 ||
//         inputMonthDay == 6 ||
//         inputMonthDay == 9 ||
//         inputMonthDay == 11
//     ) {
//         alert("In this month 30 days");
//     } else if (inputMonthDay == 2) {
//         alert("In this month 28 or 29 days")
//     } else {
//         alert("You have problem")
//     }
// }

// 5

// function checkColor() {
//     const inputColor = document.getElementById("inputColor").value;

//     if (inputColor === "червоний"){
//         alert("стоп");
//     } else if (inputColor === "жовтий") {
//         alert("чекати");
//     } else if (inputColor === "зелений") {
//         alert("йти");
//     } else {
//         alert("You have problem")
//     }
// }

//1
// const arr = [1, 2, 3];
// arr[1] = 10;
// console.tabele(arr);

//2
// const arrTwo = ['first', 'second', 'three'];
// arrTwo[3] = 'four';
// console.table(arrTwo);

//3
// const arrSum = [4, 10, 5, 6];
// let sum = 0;
// for (let i = 0; i < arrSum.length; i++){
//     sum += arrSum[i]
// }
// console.log(sum);

//4
// const arr4 = [1, 8, 7, 3, 5];
// for (let i = 0; i < arr4.length; i++){
//     console.log(arr4[i]);
// }

//5
// const string = ['hello', 'javascript', 'GoITeens', 'hi', 'monday']
// for (let i = 0; i < string.length; i++){
//     if (string[i].length < 5) {
//         continue;
//     }
//     console.log(string[i]);
// }

//6
// const arr6 = [20, 8, 25, 28, 60, 77, 500, 58, 120, 22];
// let max = arr[0];
// for (let i = 0; i < arr6.length; i++){
//     if (arr6[i] > max) {
//         max = arr6[i]
//     }
// }
// console.log(max);

//7
// const arr7 = [20, 8, 25, 28, 60, 77, 500, 58, 120, 22];
// for (let i = 0; i < arr7.length; i++){
//     if (arr7[i] % 2 === 0) {
//         console.log(arr7[i]);
//     }
// }

//1
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = friends.join(',');
// console.log(string)

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (let i = 0; i < friends.length; i++) {
//     string += friends[i];
//     if (i !== friends.length - 1) {
//         string += ',';
//     }
// }
// console.log(string);

//2
// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
//   ];
//   let string = cards.join(',');
//   console.log(string);

//3
//   const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
//   ];
//   const indexToRemove = 2;
//   cards.splice(cardToRemove, 1);
//   console.log(cards);

//4
// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
//   ];
//   const cardToInsert = 5;
//   cards.splice(cardToInsert, 0, 'Карточка-6');
//   console.log(cards)

//5
// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
// ];
// const cardToUpdate = 'Карточка-4';
// const newCard = 'Оновлена Карточка-4';
// const indexToUpdate = cards.indexOf(cardToUpdate);
// if (indexToUpdate !== -1) {
//     cards.splice(indexToUpdate, 1, newCard);
// }
// console.log(cards);

// //1
// const logItem = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItem(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])
// logItem([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])

// //2
// const calculateEngravingPrice = function (message, pricePerword) {
//   const words = message.split('')
//   const numberOfWorde = worda.length;
//   const totalprice = numberofwords * priceParword;
//   return totalPrico;
// }
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10
//   )
// );
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20
//   )
// );
// console.log(
//   calculateEngravingPrice(
//     'Donec orci lectus aliquam est magnis',
//     40)
// );
// console.log(
//   calculateEngravingPrice(
//     'Donec orci lectus aliquam est magnis',
//     20
//   )
// );

// //3
// const findLongestWord = function (string) {
//   const words = string.split('');
//   let longestWord = words[0];

//   for (let i = e; i < words.length; i++) {
//     if (words[i].length > longestword.length) {
//       longestWord = words[i];
//     }
//   }
//     return longestiord;
// }
//   console.log(findLongestMord('The quick brown fox jumped over the lazy dog'));
//   console.log(findLongestlord('Google do a roll'));
//   console.log(findLongestlord('May the force be with you'));

//   //4
//   const formatString = function (string) {
//     if (string.length <= 40) {
//       return string;
//     } else {
//       return string.slice(0, 40) + '...';
//     }
//   };
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

//   console.log(formatString('Curabitur ligula sapien.'));

//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );

//   //5
//   const checkForSpam = function (message) {
//     const lowerCase = message.toLowerCase();
//     return lowerCase.includes('spam') || lowerCase.includes('sale');
//   }
//   console.log(checkForSpam('Latest technology news')); // false
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
//   console.log(checkForSpam('Get best sale offers now!')); // true
//   console.log(checkForSpam('[SPAM] How to earn fast money?'));
// //1
// const c = 30;
// const f = 1.8 * c + 32;
// console.log(f);

// //2
// const days = 30;
// const hours = days * 24;
// const minutes = hours * 60;
// console.log(hours);
// console.log(minutes);

// //3
// let h = 100;
// let e = 100;
// h -= 25;
// e -= 30;
// console.log(h);
// console.log(e);

// //4
// let price = 100;
// let sum = price - price * 0.1;
// console.log(sum);

// //5
// const n = 3.14;
// console.log(Math.floor(n));

// //6
// const v = '5.741hg11';
// console.log(parseFloat(v))

// //7
// const x = '3.15.24pppr1';
// console.log(parseInt(x));

// //8
// const a = 25;
// console.log(Math.sqrt(a));

// //9
// const num = 20;
// const string = '15kj';
// console.log(parseInt(string));
// console.log(num.toString());
// console.log(typeof num.toString);

// //4
// const applyCallbackToEachElement = (arr, callback) => {
//     return arr.map(callback);
// }

// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (num) => num * num;

// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result);

// //5
// const calculateDiscountedPrice = (price, discount, callback) => {
//     const discountedPrice = price - (price * discount / 100);
//     callback(discountedPrice);
// }

// const showDiscountedPrice = (discountedPrice) => {
//     console.log(`Discounted price: ${discountedPrice}`);
// }

// calculateDiscountedPrice(100, 10, showDiscountedPrice);


//1
// const bankAccount = {
//     ownerName: 'Artur',
//     accountNumber: 0,
//     balance: 5000,
//     deposit(amount) {
//         this.balance += amount;
//         updateBalance();
//         alert('Потояний баланс' + this.balance);
//     },
//     withdraw(amount) {
//         if (amount > this.balance) {
//             alert('Мало коштів');
//             return;
//         } else {
//             this.balance -= amount;
//             updateBalance();
//             alert('Поточний баланс:' + this.balance);
//         }
//     },
//     displayInfo() {
//         document.getElementById('balance').innerText = `${this.balance} грн.`;
//     }
// };
// bankAccount.displayInfo();
// function updateBalance() {
//     document.getElementById('balance').textContent = bankAccount.balance;
// };
// function deposit() {
//     let amount = prompt("Вкажіть суму:");
//     if (amount > 0 && !isNaN(amount)) {
//         bankAccount.deposit(parseFloat(amount));
//     } else {
//         alert('Невірні дані');
//     }
// };
// function withdraw() {
//     let amount = prompt("Вкажіть суму:");
//     if (amount > 0 && !isNaN(amount)) {
//         bankAccount.deposit(parseFloat(amount));
//     } else {
//         alert('Невірні дані');
//     }
// };


// //4
// const movie = {
//     title: 'Hello',
//     director: 'Tom',
//     year: 1999,
//     rating: 9,
//     displayInfo() {
//         document.getElementById('title').innerText = `Tirle: ${this.title}`;
//         document.getElementById('director').innerText = `Director: ${this.title}`;
//         document.getElementById('year').innerText = `Year: ${this.title}`;
//         document.getElementById('rating').innerText = `Rating: ${this.title}`;
//     },
// };
// function updateRating() {
//     const ratingNew = parseFloat(document.getElementById('change').value);
//     if (ratingNew > 8 && !isNaN(ratingNew)) {
//         movie.rating = ratingNew;
//         movie.displayInfo();
//         const title = document.getElementById('title');
//         title.style.color = 'green';
//     } else if (isNaN(ratingNew)) {
//         alert('ВВедіть число');
//     } else {
//         movie.rating = ratingNew;
//         movie.displayInfo();
//     }
// };
// movie.displayInfo();


//1
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// //2
// const countProps = function (obj) {
//   return Object.keys(obj).length;
// };


// console.log(countProps({}));// 0

// console.log(countProps({ name: 'Mango', age: 2 }));// 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));// 3


// // 3
// const findBestEmployee = function (employees) {
//   let BestEmployee = '';
//   let maxTask = 0;

//   for (const [name, tasks] of Object.entries(employees)) {
//     if (tasks > maxTask) {
//       maxTask = tasks;
//       BestEmployee = name;
//     }
//   }
//   return BestEmployee;
// };


// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux


// // 4
// const countTotalSalary = function (employees) {
//   let totalSalary = 0;

//   for (const salary of Object.values(employees)) {
//     totalSalary += salary;
//   }
//   return totalSalary

// };


// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400


// 5
//   const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
//   ];

//   const getAllPropValues = function (arr, prop) {
//     const values = [];
//     for (const item of arr) {
//         if(item.hasOwnProperty(prop)) {
//             values.push(item[prop]);
//         }
//     }
//     return values
//   };

//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

//   console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

//   console.log(getAllPropValues(products, 'category')); // []


// 6
// const products2 = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
//   ];

//   const calculateTotalPrice = function (allProdcuts, productName) {
//     for (const product of allProdcuts) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//      }
//      return 0;
//   };


//   console.log(calculateTotalPrice(products2, 'Радар')); // 5200

//   console.log(calculateTotalPrice(products2, 'Дроїд')); // 2800



/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length + 1,
//       type,
//       amount,
//     }
//   },

//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {
//     const transactions = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transactions);
//     this.balance += amount;
//   },

//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if(amount > this.balance) {
//       console.log("Зняття такої суми неможливе, недостатньо коштів");
//       return;
//     }
//     const transactions = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transactions);
//     this.balance -= amount;
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     return this.transactions.find(transaction => transaction.id === id)
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     return this.transactions
//       .filter(transaction => transaction.type === type)
//       .reduce((total, transaction) => total + transaction.amount, 0);
//   },
// };
// account.deposit(100);
// account.withdraw(50);
// account.deposit(200);
// console.log(account.getBalance());


// //1
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const { name, age, hobby, premium } = user;

// console.log(name);
// console.log(age);
// console.log(hobby);
// console.log(premium);

// //5
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

//   const [product1, product2, product3] = products;
//   const {name:name1, price:price1, quantity:quantity1} = product1;
//   const {name:name2, price:price2, quantity:quantity2} = product2;
//   const {name:name3, price:price3, quantity:quantity3} = product3;

//   console.log(name1, price1, quantity1)
//   console.log(name2, price2, quantity2)
//   console.log(name3, price3, quantity3)

// 1
// const users = [
//   {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//   {

//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//   {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//   {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//   {

//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },  {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//   {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//   },
//   ];
// const getUserNames = (users) => users.map(user => user.name);

// console.log(getUserNames(users));

// 2
// const users = [
//   {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//   {

//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//   {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//   {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//   {

//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },  {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//   {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//   },
//   ];
//  const EyeColor = "blue";
//  const usersEyeColor = users.filter(user => user.eyeColor === EyeColor);

//  console.log(usersEyeColor);

// 3
// const users = [
//   {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//   {

//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//   {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//   {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//   {

//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },  {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//   {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//   },
//   ];
// const Gender = "female";

// const namesGender = users
//   .filter(user => user.gender === Gender)
//   .map(user => user.name);

// console.log(namesGender);

// 4
// const users = [
//   {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//   {

//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//   {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//   {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//   {

//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },  {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//   {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//   },
//   ];

// const usersIsactive = users.filter(user => !user.isActive);

// console.log(usersIsactive);

// 5
// const users = [
//   {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//   {

//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//   {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//   {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//   {

//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },  {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//   {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//   },
//   ];

// const gmail = "blackburndotson@furnigeer.com";

// const userEmail = users.find(users => users.email === gmail);

// console.log(userEmail);

// // 6
// const users = [
//   {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//   {

//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//   {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//   {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//   {

//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },  {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//   {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//   },
//   ];

// const minAge = 27;
// const maxAge = 39;

// const usersAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };
// const usersInAge = usersAge(users, 27, 39);
// console.log(usersInAge);



// 1
// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => total + user.balance, 0);
// };

// const users = [
//   { name: "John", balance: 5000 },
//   { name: "Jane", balance: 7000 },
//   { name: "Doe", balance: 8900 },
//   { name: "Alice", balance: 3016 }
// ];

// console.log(calculateTotalBalance(users)); // 23916

// 2
// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(user => user.friends.includes(friendName))
//     .map(user => user.name);
// };


// const users = [
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Goldie Gentry']
//   },
//   {
//     name: 'Sheree Anthony',
//     friends: ['Briana Decker', 'Elma Head']
//   },
//   {
//     name: 'Elma Head',
//     friends: ['Goldie Gentry', 'Sheree Anthony']
//   }
// ];

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// 3
// const getNamesSortedByFriendsCount = (users) => {
//   return users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
// };

// const users = [
//   { name: 'Moore Hensley', friends: [] },
//   { name: 'Sharlene Bush', friends: ['Briana Decker', 'Goldie Gentry'] },
//   { name: 'Elma Head', friends: ['Goldie Gentry', 'Sheree Anthony'] },
//   { name: 'Carey Barr', friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'] },
//   { name: 'Blackburn Dotson', friends: ['Jacklyn Lucas', 'Linda Chapman', 'John Doe', 'Jane Doe'] },
//   { name: 'Sheree Anthony', friends: ['Briana Decker', 'Elma Head'] },
// ];

// console.log(getNamesSortedByFriendsCount(users));

// 4
// const getSortedUniqueSkills = (users) => {
//   const skillSet = new Set();

//   users.forEach(user => {
//     user.skills.forEach(skill => skillSet.add(skill));
//   });

//   return Array.from(skillSet).sort();
// };

// const users = [
//   { name: 'Moore Hensley', skills: ['elit', 'lore', 'ipsum'] },
//   { name: 'Sharlene Bush', skills: ['anim', 'irure', 'ex'] },
//   { name: 'Elma Head', skills: ['irure', 'adipisicing', 'laborum'] },
//   { name: 'Carey Barr', skills: ['ex', 'lore', 'culpa'] },
//   { name: 'Blackburn Dotson', skills: ['elit', 'commodo', 'laborum'] },
//   { name: 'Sheree Anthony', skills: ['commodo', 'amet', 'anim'] },
// ];

// console.log(getSortedUniqueSkills(users));


// домашня робота 16

// 1
// function Account({ login, email }) {
//   this.login = login;
//   this.email = email;
// }

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// 2
// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// // Створення об'єкта poly
// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// 17 and 18

// task 1
// const button = document.getElementById('buttonTask1');
// const textInput = document.getElementById('inputTextTask1');

// button.addEventListener('click', () => {
//     button.textContent = inputTextTask1.value;
// });

// task 2
// const imgAnimal = document.getElementById ('imageAnimals');
// imgAnimal.src = 'dog.jpg';
// const link = document.getElementById ('linkId');
// const img = document.getElementById ('imgLink');

// task 3
// link.href = 'https://uk.wikipedia.org/wiki/JavaScript';
// img.src = 'cat.jpg';

// task 4
const listElement = document.getElementById('numberOne');
listElement.textContent = 'Scss'