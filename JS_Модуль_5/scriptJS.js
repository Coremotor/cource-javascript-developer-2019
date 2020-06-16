'use strict';

outer: for(;;) {

  let valueOfStartInterval = prompt('Значение начала интервала');
  if (valueOfStartInterval === null) break; //При нажатии кнопка "Отмена" работа программы заканчивается

  let valueOfEndInterval = prompt('Значение конца интервала');
  if (valueOfEndInterval === null) break;  //При нажатии кнопка "Отмена" работа программы заканчивается

  //Функция генерации случайного целого числа включая минимум и максимум
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  
  //Помещение в переменную результата функции генерации случайного числа
  let randomNumber = (getRandomIntInclusive(valueOfStartInterval, valueOfEndInterval));
  console.log(randomNumber);

  while (true) {
    let valueUserAnswer = prompt('Введите число для отгадки');

    //Остановка цикла по нажатию кнопки "Отмена"
    if (valueUserAnswer === null) break outer;
    
    //Вывод сообщения и переход на следующую итерацию цикла, если введена строка
    if (!(!isNaN(parseFloat(valueUserAnswer)) && isFinite(valueUserAnswer))) {
      alert('Вы ввели не число, введите, пожалуйста, число!');
      continue;
    }

    //Проверка числа на больше, меньше или равно с выводом сообщения
    if (+valueUserAnswer > randomNumber) {
      alert ('Меньше');
    } else if (+valueUserAnswer < randomNumber) {
      alert('Больше');
    } else if (+valueUserAnswer === randomNumber) {
      alert ('Верно');
      //Предложение игры заного
      let answerForContinue = prompt('Хотите еще сыграть? Если "да", то нажмите "ОК", если нет то "Отмена"');
      console.log(answerForContinue);
        if (answerForContinue === '') {
          break;
        } else if (answerForContinue === null){
          alert('Спасибо за игру!');
          break outer;
        }
      break;
    }
  }
}
