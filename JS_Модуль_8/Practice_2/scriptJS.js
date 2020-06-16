'use strict';

function filterByType() {
	let argsArray = [...arguments];
	let firstValueArray = argsArray[0];
	let argsArrayNew = argsArray.slice(1, argsArray.length);
	let arrayOut = argsArrayNew.filter(item => firstValueArray === typeof(item));
	console.log(arrayOut);
}

filterByType('string', 10, 20, 'a', 'b', true, false);
filterByType('number', 10, 20, 'a', 'b', true, false);
filterByType('boolean', 10, 20, 'a', 'b', true, false);