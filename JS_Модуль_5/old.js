'use strict';

(function(){

//Заключение всей "игры" в функцию
window.gameStart = function(){
 
  //Функция генерации случайного целого числа включая минимум и максимум
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  //Помещение в переменную результата функции генерации случайного числа
  let randomNumber = (getRandomIntInclusive(1, 10));
  console.log(randomNumber);
  alert('Загадано число от 1 до 10');

  //Функция сравнения чисел
  function bodyOfGame() {
    let valueUserAnswer = prompt('Введите число для отгадки');

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

  //Вызов функции сравнения чисел
  bodyOfGame();

  //Предложение игры заного
  let answerForContinue = prompt('Хотите еще сыграть? Если "да", то нажмите "ОК", если нет то "Отмена"');
  
    if (answerForContinue === null) {
      alert('Спасибо за игру!');
      return;
    }

  //Рекурсивный подход  
  gameStart();
}

})()


// //Вызов функции "игры"
// game();




