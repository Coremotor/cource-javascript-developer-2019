'use strict';

let sum = 0;

while (true) {
  let value = prompt("Введите число", ''); //Запрос чисел у пользователя
  console.log(value);

  if (value === '') continue; //Переход на следующую итерацию цикла, если введена пустая строка
  if (value === null) break; //Остановка цикла при нажатии кнопки "Отмена"
  if (!(!isNaN(parseFloat(value)) && isFinite(value))) continue; //Переход на следующую итерацию цикла, если введена строка 
  
  sum += Number(value);
}

alert( 'Сумма: ' + sum );