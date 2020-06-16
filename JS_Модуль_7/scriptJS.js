'use strict';
//родительская ф-ия конструктор "Транспортное средство"
let Vehicle = function (length, height, width) {
  this.length = length;
  this.height = height;
  this.width = width;
  this.ecological = function() {
    console.log ('Порчу воздух');
  }
}

let Auto = function () {
  Vehicle.apply(this, arguments); // наследуем все свойства от Vehicle
};

Auto.prototype = Object.create(Vehicle.prototype); // наследуем методы через прототип
console.log(Auto.prototype.constructor);
Auto.prototype.constructor = Vehicle; // прописываем имя конструктора
console.log(Auto.prototype.constructor);
Auto.prototype.traffic = function () {
  console.log ('Еду');
};

let Plane = function () {
  Vehicle.apply(this, arguments); // наследуем все свойства от Vehicle
};

Plane.prototype = Object.create(Vehicle.prototype); // наследуем методы через прототип
Plane.prototype.constructor = Vehicle; // прописываем имя конструктора

Plane.prototype.traffic = function () {
  console.log ('Лечу');
};

let Ship = function () {
  Vehicle.apply(this, arguments); // наследуем все свойства от Vehicle
};

Ship.prototype = Object.create(Vehicle.prototype); // наследуем методы через прототип
Ship.prototype.constructor = Vehicle; // прописываем имя конструктора

Ship.prototype.traffic = function () {
  console.log ('Плыву');
};

let auto = new Auto(10, 20, 30);
let plane = new Plane(100, 200, 300);
let ship = new Ship(1000, 2000, 3000);

console.log(auto.ecological());

//переопределение родительского метода
auto.ecological = function () {
  console.log ('я не порчу воздух, наверно')
};
console.log(auto.ecological());
