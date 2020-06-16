import './styles/global.css'
import buttonClickCounter from "./button/button";

'use strict'

const	body = document.querySelector('.body');

body.insertAdjacentHTML('afterbegin', `<button class="button" type="button"></button>`);

buttonClickCounter();