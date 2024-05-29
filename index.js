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
let i = 1;
while( i <= 20) {
    if (i % 3 === 0) {
        i++;
        continue;
    }
    console.log(i)
}