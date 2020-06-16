'use strict';

class Vehicle {
	constructor(length, height, width) {
		this.length = length;
		this.height = height;
		this.width = width;
	}
	ecological() {
			console.log ('Порчу воздух');
	}
}

class Auto extends Vehicle {
	constructor() {
		super();
	}
	traffic() {
		console.log ('Еду');
	}
}


class Plane extends Vehicle {
	constructor() {
		super();
	}
	traffic() {
		console.log ('Лечу');
	}
}


class Ship extends Vehicle {
	constructor() {
		super();
	}
	traffic() {
		console.log ('Плыву');
	}
}


let auto = new Auto(10, 20, 30);
let plane = new Plane(100, 200, 300);
let ship = new Ship(1000, 2000, 3000);

console.log(auto.ecological);


auto.ecological = function () {
	console.log ('я не порчу воздух, наверно')
};
console.log(auto.ecological);
