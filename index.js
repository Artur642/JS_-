//1
const age = 13;
console.log(age);

//2
const myUser ='Artur';
console.log(myUser);

//3
const isStudent = true;
console.log(isStudent);

//4
const myString = "цитата";
console.log(myString)

//5
const myNumber = 4;
const a = myNumber + 10
console.log(a);

//6
const myNull = null;
console.log(myNull)

//7
const user = prompt("Вкажіть ваше ім'я");
alert('Вітаю вас, ${user}')

//8
const userName = confirm('Чи приймаєте умову?')
if (userName === true) {
    alert("Дякую за підтвердження")
}
else{
    alert("Дію відмінено")
}

//9
alert("небезпечна Дія")
const danger = confirm('Дія небезпечна, ви точно підверджуєте?')
if (danger === true) {
    alert("Дякую за підтвердження")
}
else{
    alert("Дію відмінено")
}