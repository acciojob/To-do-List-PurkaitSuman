//your code here
const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", function() {
  if (newTodoInput.value !== "") {
    const newTodo = document.createElement("li");
    newTodo.innerHTML = newTodoInput.value;
    todoList.appendChild(newTodo);
    newTodoInput.value = "";
  }
});

