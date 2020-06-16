'use strict';

const taskValue = document.querySelector('.task-value');
const addTaskBtn = document.querySelector('.btn');
const taskList = document.querySelector('.task-list');
const taskForm = document.querySelector('.task');
const taskItem = document.querySelector('.task-list__item');
const taskText = document.querySelector('.task-list__text');


function addTask(event){
  event.preventDefault();
  const taskListText = taskValue.value;
  taskList.insertAdjacentHTML('beforeend',
    `<li class="task-list__item">
      <span class="task-list__text">${taskListText}</span>
      <button class="task-list__btn-close">x</button>
     </li>`
  );
  this.reset();
}

taskForm.addEventListener('submit', addTask);

function delTask (){
  if (!event.target.classList.contains('task-list__btn-close')) return;  
  const taskElem = event.target.closest('.task-list__item');
  taskElem.remove();
}

taskList.addEventListener('click', delTask) ;

function taskComplete(){
  if (!event.target.classList.contains('task-list__text')) return;
  const taskTextElem = event.target.closest('.task-list__text');
  taskTextElem.classList.toggle('task-complete');
}

taskList.addEventListener('click', taskComplete);