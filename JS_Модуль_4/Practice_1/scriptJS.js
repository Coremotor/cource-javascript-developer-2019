'use strict';

//функция вывода текущей даты и текущего времени в консоль
function showCurrentDate(){

  let date = new Date(); //получаем объект Date();

  //разбираем объект Date();
  let dayNow = date.getDate();
  let monthNow = date.getMonth();
  let yearNow = date.getFullYear();
  let dayOfTheWeekNow = date.getDay();
  let hourseNow = date.getHours();
  let minutesNow = date.getMinutes();
  let secondsNow = date.getSeconds();

  // массив для конвертации date.getMonth(); в месяцы на русском языке
  let parseMonth = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]

  // массив для конвертации date.getDay(); в дни недели на русском языке
  let parseDayOfTheWeek = [
    'воскресение',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
  ]

  //блок реализации склонения часов
  let hourseString;

  if (hourseNow === 1 ||hourseNow === 21) {
    hourseString = 'час';
  } else if (hourseNow === 2 || hourseNow === 3 || hourseNow === 4 || hourseNow === 22 || hourseNow === 23) {
    hourseString = 'часа';
  } else {
    hourseString = 'часов';
  }

  //блок реализации склонения минут
  let minutesString;

  if (minutesNow === 1 || minutesNow === 21 || minutesNow === 31 || minutesNow === 41 || minutesNow === 51) {
    minutesString = 'минута';
  } else if (minutesNow === 2 || minutesNow === 3 || minutesNow === 4 || minutesNow === 22 || minutesNow === 23 || minutesNow === 24 || minutesNow === 32 || minutesNow === 33 || minutesNow === 34 || minutesNow === 42 || minutesNow === 43 || minutesNow === 44 || minutesNow === 52 || minutesNow === 53 || minutesNow === 54) {
    minutesString = 'минуты';
  } else {
    minutesString = 'минут';
  }

  //блок реализации склонения секунд
  let secondsString;

  if (secondsNow === 1 || secondsNow === 21 || secondsNow === 31 || secondsNow === 41 || secondsNow === 51) {
    secondsString = 'секунда';
  } else if (secondsNow === 2 || secondsNow === 3 || secondsNow === 4 || secondsNow === 22 || secondsNow === 23 || secondsNow === 24 || secondsNow === 32 || secondsNow === 33 || secondsNow === 34 || secondsNow === 42 || secondsNow === 43 || secondsNow === 44 || secondsNow === 52 || secondsNow === 53 || secondsNow === 54) {
    secondsString = 'секунды';
  } else {
    secondsString = 'секунд';
  }

  //вывод текущего времени в консоль
  console.log(`Сегодня ${dayNow} ${parseMonth[monthNow]} ${yearNow} года, ${parseDayOfTheWeek[dayOfTheWeekNow]}, ${hourseNow} ${hourseString}, ${minutesNow} ${minutesString}, ${secondsNow} ${secondsString}`);

  //вывод даты в HTML документ, эксперимент для себя :)
  let dayNowElem = document.querySelector('.day-now');
  let monthElem = document.querySelector('.month-now');
  let yearNowElem = document.querySelector('.year-now');
  let dayOfTheWeekNowElem = document.querySelector('.day-of-week');
  let hourseNowElem = document.querySelector ('.hourse-now');
  let hourseStringElem = document.querySelector('.hourse-string-now');
  let minutesNowElem = document.querySelector('.minutes-now');
  let minutesStringElem = document.querySelector('.minutes-string-now');
  let secondsNowElem = document.querySelector('.seconds-now');
  let secondsStringElem = document.querySelector('.seconds-string-now');

  dayNowElem.innerHTML = dayNow;
  monthElem.innerHTML = parseMonth[monthNow];
  yearNowElem.innerHTML = yearNow;
  dayOfTheWeekNowElem.innerHTML = parseDayOfTheWeek[dayOfTheWeekNow];
  hourseNowElem.innerHTML = hourseNow;
  hourseStringElem.innerHTML = hourseString;
  minutesNowElem.innerHTML = minutesNow;
  minutesStringElem.innerHTML = minutesString;
  secondsNowElem.innerHTML = secondsNow;
  secondsStringElem.innerHTML = secondsString;
}

//функция установки интервального вывода в консоль текущего времени, с интервалом в 1 секунду
function timerOnshowCurrentDate(){
  let timerID = setInterval(showCurrentDate, 1000);

  //вешаем обработчик на клавишу 'z' для остановки интервального вывода
  document.addEventListener('keydown', function(){
    if (event.code === 'KeyZ') {
      clearInterval(timerID);
    }
  });
}

//вызов функции интервального вывода даты и времени
timerOnshowCurrentDate();




