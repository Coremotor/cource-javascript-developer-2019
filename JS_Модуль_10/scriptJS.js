'use strict';
const btnEdit = document.querySelector('.js-edit');
const btnSave = document.querySelector('.js-save');
const btnCancel = document.querySelector('.js-cancel');
const textField = document.querySelector('.text-field')

textField.textContent = localStorage.getItem('textField');

function textEdit() {
	textField.setAttribute('contenteditable', 'true');
	btnSave.removeAttribute('disabled');
	btnCancel.removeAttribute('disabled');
}

btnEdit.addEventListener('click', textEdit);

function textSave() {
	localStorage.setItem('textField', textField.textContent);
	textField.removeAttribute('contenteditable');
	btnSave.setAttribute('disabled', 'true');
	btnCancel.setAttribute('disabled', 'true');
}

btnSave.addEventListener('click', textSave);

function cancel() {
	textField.textContent = localStorage.getItem('textField');
	textField.removeAttribute('contenteditable');
	btnSave.setAttribute('disabled', 'true');
	btnCancel.setAttribute('disabled', 'true');
}

btnCancel.addEventListener('click', cancel);