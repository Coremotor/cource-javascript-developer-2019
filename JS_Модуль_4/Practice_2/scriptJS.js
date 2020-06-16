'use strict';

//создание массива с объектами
let users = [

  {
    name: 'Fox',
    login: 'FoxUsr',
    password: 'FoxPass'
  },

  {
    name: 'Dog',
    login: 'DogUsr',
    password: 'DogPass'
  },

  {
    name: 'Cat',
    login: 'CatUsr',
    password: 'CatPass'
  },

  {
    name: 'Fish',
    login: 'FishUsr',
    password: 'FishPass'
  }
]

//запрос логина
//Проверки на пустые строки здесь не делаю
let userLogin = prompt('Введите логин');

//оставлю для себя
// let currentUser = users.find(function(usr) {
//   return usr.name === userLogin;
// })

//поиск объекта с введенным логином и если логин найден то запрос пароля, вывод сообщений
let currentUser = users.find(usr => usr.login === userLogin);
if (currentUser === undefined) {
  alert('Пользователи с таким логином отсутствуют');
} else {
  //Проверки на пустые строки здесь не делаю
  let userPassword = prompt('Введите пароль');

  if (currentUser.password === userPassword) {
    alert(`Здравствуйте ${currentUser.name}!`);
  } else {
    alert('Ошибка авторизации');
  }
}


