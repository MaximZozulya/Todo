'use strict';

// 1.Создаем массив для хранения наших задач
const todoList = [];

// 2.При нажатии кнопки добавит , получаем значение из поля ввода и добавляем его в наш массив
function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  todoList.push(name);

  // 3. Выводим на консоль
  console.log(todoList);
  
  // Очищаем поле после  ввода текста
  inputElement.value = '';
}
