'use strict';
const btnEdit = document.querySelector('.js-edit');
const btnSave = document.querySelector('.js-save');
const btnCancel = document.querySelector('.js-cancel');
const textField = document.querySelector('.text-field');
const history = document.querySelector('.history');

//при перезагрузке страницы берет последнюю запись из localStorage и вписывает в текстовое поле,
//(по факту не работает т.к. в localStorage после перезагрузки страницы записи сортируются каким то рандомным способом,
// я не смог понять по каким параметрам идет сортировка и как сделать так что бы после перезагрузки страницы
// в текстовое поле попадала последняя запись сохраненная пользователем???)
textField.textContent = localStorage.getItem(localStorage.key(localStorage.length - 1));

//цикл для заполнения селекта если есть записи в сторадже
for (let i = 0; i < localStorage.length; i++) {
	let k = localStorage.key(i);
	history.insertAdjacentHTML('beforeend',`<option class="">${k}</option>`);
}

function textEdit() {
	textField.setAttribute('contenteditable', 'true');
	btnSave.removeAttribute('disabled');
	btnCancel.removeAttribute('disabled');
}

btnEdit.addEventListener('click', textEdit);

function textSave() {
	let textFieldDateMarker = Date();
	localStorage.setItem(`${textFieldDateMarker}`, textField.textContent);
	textField.removeAttribute('contenteditable');
	btnSave.setAttribute('disabled', 'true');
	btnCancel.setAttribute('disabled', 'true');
	history.insertAdjacentHTML('beforeend',`<option class="">${textFieldDateMarker}</option>`);
}

btnSave.addEventListener('click', textSave);

function cancel() {
	textField.textContent = localStorage.getItem('textField');
	textField.removeAttribute('contenteditable');
	btnSave.setAttribute('disabled', 'true');
	btnCancel.setAttribute('disabled', 'true');
}

btnCancel.addEventListener('click', cancel);

function choice (event) {
	textField.textContent = localStorage.getItem(event.target.value);
}

history.addEventListener('change', choice)