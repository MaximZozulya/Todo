'use strict';

// 1.Создаем массив для хранения наших задач
const todoList = ['Купить еду','Посмотреть фильм'];

// Отображаем список на странице
renderTodo();

function renderTodo() {

  let todoListHTML = '';
  
  // Проходимся по всем элементам массива и создаем html для каждой задачи
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = 
    `<p>${todo}
     <button onclick="
     todoList.splice(${i}, 1);
     renderTodo();
     ">Delete</button></p>`; // удалям 1 значение из списка и обновляем список с помощью функции renderTodo()
     
    todoListHTML += html;
  }
    console.log(todoListHTML);
  
  document.querySelector('.js-todo').innerHTML = todoListHTML;
}


// 2.При нажатии кнопки добавит , получаем значение из поля ввода и добавляем его в наш массив
function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  todoList.push(name);

  // 3. Выводим на консоль
  console.log(todoList);

  // Очищаем поле после  ввода текста
  inputElement.value = '';
  // Отображаем список на странице
  renderTodo();
}
