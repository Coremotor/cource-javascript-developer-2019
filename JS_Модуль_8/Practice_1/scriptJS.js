// 'use strict';

let code = prompt('Введите кусок кода!');

		try {
			function f() {
				'use strict';
				return eval(code);
			}
			f();
		}

		catch (ex) {
			console.log(`Возникла ошибка ${ex}`)
		}



