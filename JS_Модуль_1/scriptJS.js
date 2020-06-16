'use strict';

let myName = prompt('Как Вас зовут?');
let mySurname = prompt('Ваша фамилия?');
let myBirthYear = prompt('Введите Ваш год рождения?');
let today = new Date();
let currentYear = today.getFullYear();
let age = currentYear - myBirthYear;

if (age < 20) {
  alert(`Привет ${myName} ${mySurname}!`);
}
else if (age >= 20 && age < 40) {
  alert(`Добрый день ${myName} ${mySurname}!`)
}
else {
  alert(`Здравствуйте ${myName} ${mySurname}!`)
}
