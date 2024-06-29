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
//1
const c = 30;
const f = 1.8 * c + 32;
console.log(f);

//2
const days = 30;
const hours = days * 24;
const minutes = hours * 60;
console.log(hours);
console.log(minutes);

//3
let h = 100;
let e = 100;
h -= 25;
e -= 30;
console.log(h);
console.log(e);

//4
let price = 100;
let sum = price - price * 0.1;
console.log(sum);

//5
const n = 3.14;
console.log(Math.floor(n));

//6
const v = '5.741hg11';
console.log(parseFloat(v))

//7
const x = '3.15.24pppr1';
console.log(parseInt(x));

//8
const a = 25;
console.log(Math.sqrt(a));

//9
const num = 20;
const string = '15kj';
console.log(parseInt(string));
console.log(num.toString());
console.log(typeof num.toString);