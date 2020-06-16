'use strict';

(function(){

  function gameGuessNumber(){

    //Функция генерации случайного целого числа включая минимум и максимум
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

    //Помещение в переменную результата функции генерации случайного числа
    let randomNumber = (getRandomIntInclusive(1, 10));
    console.log('Загадано число', randomNumber);
    alert('Загадано число от 1 до 10. У Вас есть 3 попытки что бы угадать число!');

    //счетчик попыток
    function makeCounter() {
      let count = 4;

      return function() {
        return count--; 
      };
    }

    //Замыкание на ф-ии gameGuessNumber()
    return function(){

      //Вызов ф-ии счетчика попыток
      let counter = makeCounter();

      //Функция сравнения чисел и отслеживания кол-ва попыток
      function bodyOfGame() {
        
        //Работа счетчика
        let numberOfCount = counter();
        console.log('кол-во попыток', numberOfCount);

        //Отслеживание кол-ва попыток угадать
        if (numberOfCount === 0) {
          
          let answerForContinue = confirm('Попытки угадать исчерпаны! Хотите попытаться угадать еще раз? Если "да", то нажмите "ОК", если нет то "Отмена"');
                    
          if (answerForContinue) {
            return start();
          } else {
            alert('Спасибо за игру!');
            return;
          }
        }  

        let valueUserAnswer = prompt(`Введите число для отгадки, попыток осталось, ${numberOfCount}`);

        //Выход из функции bodyOfGame() по нажатию кнопки "Отмена"
        if (valueUserAnswer === null) return;
        
        //Вывод сообщения если введена строка
        if (!(!isNaN(parseFloat(valueUserAnswer)) && isFinite(valueUserAnswer))) {
          alert('Вы ввели не число, введите, пожалуйста, число!');
          return bodyOfGame();
        }

        //Проверка числа на больше, меньше или равно с выводом сообщения и выходом из функции
        if (+valueUserAnswer > randomNumber) {
          alert ('Меньше');
        } else if (+valueUserAnswer < randomNumber) {
          alert('Больше');
        } else if (+valueUserAnswer === randomNumber) {
          alert ('Верно');
          return;     
        }

        //Рекурсивный подход
        bodyOfGame();
      }
    
      //Вызов функции сравнения чисел и отслеживания кол-ва попыток
      bodyOfGame();
    }  
  }
  
  window.start = gameGuessNumber();  
})()








