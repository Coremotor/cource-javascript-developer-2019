'use strict';

//ф-ия конструктор для создания новых объектов типа "пользователь"
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = Date();
  // console.log (this.firstName, this.lastName, this.regDate);
}

//ф-ия коструктор создания массива пользователей, 
//записи в массив и вывода из массива информации о пользователе
function UserList() {
  let users = [];

  this.add = function(newUser) {
    users.push(newUser)
  }
  
  this.getAllUsers = function() {

    users.forEach(function(newUser){

      for (let prop in newUser) {

        console.log(newUser[prop]); 

      }
    });
  }
}

//создание экземпляра объекта созания массива с методами ввода и вывода инфо о пользователе
let userList = new UserList();


for (;;) {
  //запрос инфо о пользователе
  let userFirstNameLastName = prompt('Введите имя и фамилию через пробел!');

  if (userFirstNameLastName === null) {
    //вывод всех пользователей при нажатии кнопки отмена
    userList.getAllUsers();
    break;

  } else {
    //разбиваем строку на имя и фамилию
    let userFirstNameLastNameMassive = userFirstNameLastName.split(' ');

    let firstName = userFirstNameLastNameMassive[0];
    let lastName = userFirstNameLastNameMassive[1];

    //создание экземпляра объекта типа пользователь
    let newUser = new User(firstName, lastName);

    //внесение объекта-пользователя в массив пользователей
    userList.add(newUser);
  }
}
