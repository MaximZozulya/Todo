'use strict';

// 1.Создаем массив для хранения наших задач
const todoList = [{
  name: 'Купить еду',
  dueDate: '2025-03-06'
},{
  name: 'Посмотреть фильм',
  dueDate: '2025-03-06'
}];

// Отображаем список на странице
renderTodo();

function renderTodo() {

  let todoListHTML = '';
   // Проходимся по всем элементам массива и создаем html для каждой задачи 
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = 
    `<p>${name} ${dueDate}
     <button onclick="
     todoList.splice(${i}, 1);
     renderTodo();
     ">Delete</button></p>`; // удалям 1 значение из списка и обновляем список с помощью функции renderTodo()
    todoListHTML += html;
  }  
  document.querySelector('.js-todo').innerHTML = todoListHTML;
}


// 2.При нажатии кнопки добавит , получаем значение из поля ввода и добавляем его в наш массив
function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date'); // получаем  дату
  const dueDate = dateInputElement.value;

  todoList.push({ // добавляем обьект в массив с задачей и датой
    name,
    dueDate
  });

  // Очищаем поле после  ввода текста
  inputElement.value = '';
  // Отображаем список на странице
  renderTodo();
}
