'use strict';

//Запрос данных от пользователя
let firstValue = prompt('Введите первое число.', 0);
let secondValue = prompt('Введите второе число.', 0);

if (checkOnNumberOrNull(firstValue, secondValue)) {
  alert('Вы не ввели одно или оба значения чисел или одно из введенных значений не является числом'); 
    //Процедура сравнения чисел и вывода результата
  } else if (+firstValue > +secondValue) {
    alert('Первое число больше второго');
  } else if (+firstValue < +secondValue) {
    alert('Второе число больше первого');
  } else if (+firstValue === +secondValue) {
    alert('Числа равны');
  }

//Функция проверки на ввод строк вместо чисел, на ввод пустых полей, на отмену запроса prompt()
function checkOnNumberOrNull (checkFirstValue, checkSecondValue) {
  return (!(!isNaN(parseFloat(checkFirstValue)) && isFinite(checkFirstValue)) || 
          !(!isNaN(parseFloat(checkSecondValue)) && isFinite(checkSecondValue)) || 
          firstValue === '' || secondValue === '' || 
          firstValue === null || secondValue === null); 
}
