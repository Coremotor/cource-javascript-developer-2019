import './button.css'

export default function buttonClickCounter() {

	'use strict'

	const button = document.querySelector('.button');
	button.textContent = '0';
	let a = 0;

	button.addEventListener('click', function () {
		button.textContent = `${++a}`;
	})
}

