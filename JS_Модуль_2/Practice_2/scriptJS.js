'use strict';

//Получение входных данных от пользователя и преобразование в числовой тип 
let firstYearValue = +prompt('Введите значение начально года', 1900);
let secondYearValue = +prompt('Введите значение конечного года', 2020);

if (firstYearValue > secondYearValue) {
  alert('Год начала интервала больше года конца интервала'); //Проверка значений года на больше меньше
} else {
  //Цикл выведения в консоль високосных годов
  for (let y = firstYearValue; y <= secondYearValue; y++) {
    if (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0)) {
      console.log(y);
    }
  }
}