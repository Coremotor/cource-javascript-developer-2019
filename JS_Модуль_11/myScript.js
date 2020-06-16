//Попытка сделать живые запросы без кнопки "Перевести"

'use strict';

//Берем элементы DOM
const inputLangChoice = document.querySelector('.input-lang-choice');
const outputLangChoice = document.querySelector('.output-lang-choice');
const incomingWord = document.querySelector('.incoming-word');
const translateField = document.querySelector('.translate');

//Создаем объект для формирования ссылок запросов
let langsObj = {
	key: 'trnsl.1.1.20200331T105544Z.00cefa03f5501747.ee331fecb30fc728ca63dd3f103ab8ca34a20c06',
	ui: 'ru',
};

//Формируем ссылку для запроса перечня языков
const urlGetLangs = `https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=${langsObj.ui}&key=${langsObj.key}`;

//Запрашиваем перечень языков
fetch (urlGetLangs)
	.then((response) => {

		//Смотри ошибки
		if (!response.ok) {
			console.log(`Что то пошло не так: ошибка №${response.status}`);
			return;
		}

		return response.json();
	})

	.then((data) => {

		//Заполняем selected входящего и исходящего направлений перевода
		for(let key in data.langs) {

			//Дополняем объект для формирования ссылок запросов
			inputLangChoice.insertAdjacentHTML('beforeend',`<option value="${key}" class="">${data.langs[key]}</option>`);
			outputLangChoice.insertAdjacentHTML('beforeend',`<option value="${key}" class="">${data.langs[key]}</option>`);
		}

		////Определяем стартовые направления входящего и исходящего перевода и пишем в объект
		langsObj.inputLang = inputLangChoice.value;
		langsObj.outputLang = outputLangChoice.value;
	});

//Создаем ф-ию отправки запроса перевода для слушателей событий
function translate() {

	//Если пустое поле Слова для перевода то выходим из ф-ии
	if (langsObj.inword === undefined) {
		return;
	}

	//Формируем ссылку запроса перевода
	const translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${langsObj.inputLang}-${langsObj.outputLang}&text=${langsObj.inword}&key=${langsObj.key}`;

	//Отправляем запрос
	fetch(translateUrl)
		.then((response) => {

			//Смотрим ошибки
			if (!response.ok) {
				console.log(`Что то пошло не так: ошибка №${response.status}`);
				return;
			}

			return response.json();
		})

		.then((data) => {
			//Вставляем резулбтат перевода в DOM
			translateField.textContent = data.text[0]
		})
}

//Слушатели изменения полей языков и переводимого слова
inputLangChoice.addEventListener('change', function() {
	langsObj.inputLang = this.value;
	translate();
});

outputLangChoice.addEventListener('change', function() {
	langsObj.outputLang = this.value;
	translate();
});

incomingWord.addEventListener('input', function() {
	langsObj.inword = this.value;
	translate();
});


