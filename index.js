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
function showChoise() {
    const select = document.getElementById("drinks");
    const selected = select.options[select.selectedIndex].value;

    if (selected === "coffee") {
        alert("Ви вибрали каву")
    } else if (selected === "tea") {
        alert("Ви вибрали чай");
    } else if (selected === "juice") {
        alert("Ви вибрали сік");
    }
}

// 2

function checkDay() {
    const inputDay = document.getElementById("inputDay").value;

    if (
        inputDay === "понеділок" ||
        inputDay === "вівторок" ||
        inputDay === "середа" ||
        inputDay === "четаверт" ||
        inputDay === "п'ятниця" 
    ) {
        alert("Зараз будні дні")
    } else if (inputDay === "субота" || inputDay === "неділя") {
        alert("Зараз вихідні")
    } else {
        alert("You have problem")
    }
}

// 3

function checkMonth() {
    const inputMonth = document.getElementById("inputMonth").value;

    if (inputMonth == 1 || inputMonth == 2 || inputMonth == 12) {
        alert("It`s winter!")
    } else if (inputMonth == 3 || inputMonth == 4 || inputMonth == 5){
        alert("It`s spring!");
    } else if (inputMonth == 6 || inputMonth == 7 || inputMonth == 8){
        alert("It`s summer!");
    } else if (inputMonth == 9 || inputMonth == 10 || inputMonth == 11){
        alert("It`s autumn!")
    } else {
        alert("You have problem")
    }
        
}

// 4

function inputMonthDay() {
    const inputMonthDay = document.getElementById("inputMonthDay").value;

    if (
        inputMonthDay == 1 ||
        inputMonthDay == 3 ||
        inputMonthDay == 5 ||
        inputMonthDay == 7 ||
        inputMonthDay == 8 ||
        inputMonthDay == 10 ||
        inputMonthDay == 12
    ) {
        alert("In this month 31 days");
    } else if (
        inputMonthDay == 4 ||
        inputMonthDay == 6 ||
        inputMonthDay == 9 ||
        inputMonthDay == 11
    ) {
        alert("In this month 30 days");
    } else if (inputMonthDay == 2) {
        alert("In this month 28 or 29 days")
    } else {
        alert("You have problem")
    }
}

// 5

function checkColor() {
    const inputColor = document.getElementById("inputColor").value;

    if (inputColor === "червоний"){
        alert("стоп");
    } else if (inputColor === "жовтий") {
        alert("чекати");
    } else if (inputColor === "зелений") {
        alert("йти");
    } else {
        alert("You have problem")
    }
}