'use strict';

//создаем массивы для склонений часов, минут, секунд
let hourseStringDeclension = ['час' ,'часа', 'часов',]
let minutesStringDeclension = ['минута' ,'минуты', 'минут',]
let secondsStringDeclension = ['секунда' ,'секунды', 'секунд',]

//функция для получения правильного склонения
function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];  
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];   
}

function showCurrentDate(){
  let date = new Date(); //получаем объект Date();

  //разбираем объект Date();
  let yearNow = date.getFullYear();
  let hourseNow = date.getHours();
  let minutesNow = date.getMinutes();
  let secondsNow = date.getSeconds();
  let dayMonthNowRu = date.toLocaleString("ru", {month: 'long', day: '2-digit'});
  let dayOfTheWeekNowRu = date.toLocaleString("ru", {weekday: 'long'});

  //получение правильных склонений
  let getHourseStringDeclension = declOfNum(hourseNow, hourseStringDeclension);
  let getMinutesStringDeclension = declOfNum(minutesNow, minutesStringDeclension);
  let getSecondsStringDeclension = declOfNum(secondsNow, secondsStringDeclension);
  
  //вывод в консоль текущего времени
  console.log(`Сегодня ${dayMonthNowRu} ${yearNow} года, ${dayOfTheWeekNowRu}, ${hourseNow} ${getHourseStringDeclension}, ${minutesNow} ${getMinutesStringDeclension}, ${secondsNow} ${getSecondsStringDeclension}`);
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

timerOnshowCurrentDate();