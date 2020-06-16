
//берем DOM элементы 
const footballField = $('.field');
const ball = $('.ball');

//Обработчик на клик по мячу
ball.on('click', function () {

	//Определяем размеры поля с учетом размеров мяча на будущее 
	const fieldWidth = footballField.width() - 100;
	const fieldHeight = footballField.height() - 100;

	//Ширина ворот
	const goal = fieldHeight*0.15;
	//Позиционирование ворот
	const goalPositionDown = (fieldHeight / 2) + (goal / 2);
	const goalPositionUp = (fieldHeight / 2) - (goal / 2);

	console.log(goalPositionUp, goalPositionDown);

	//случайные координаты по оси Y
	const randomY = Math.random()* (fieldHeight - 0) + 0;

	//Движение мяча с проверкой нахожденя на поле и гола
	if (ball.position().left === 0) {
		ball.animate({top: randomY, left: fieldWidth}, 1000, function(){
			if (ball.position().top > goalPositionUp && ball.position().top < goalPositionDown) {
				alert('Goal');
			}
		});
	} else if (ball.position().left === fieldWidth) {
		ball.animate({top: randomY, left: 0}, 1000, function(){
			if (ball.position().top > goalPositionUp && ball.position().top < goalPositionDown) {
				alert('Goal');
			}
		});
	}
});

