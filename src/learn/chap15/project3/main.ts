import { getRandomInt } from "./helper.js";

console.log("project 3");

interface ITodo {
    id: number;
    name: string;
}

const todoInputElement = document.getElementById("todoInput") as HTMLInputElement;

//saveTodoBtn
const saveTodoBtnElement = document.getElementById("saveTodoBtn");

const handleSaveTodoToLocalStorage = (todo: ITodo) => {

    // check sự tồn tại của todo
    const localTodos = localStorage.getItem("todoList");

    if (localTodos) {
        //update
        const todosArr = JSON.parse(localTodos) as ITodo[];
        todosArr.push(todo);

        localStorage.setItem("todoList", JSON.stringify(todosArr));
    } else {
        //create
        localStorage.setItem("todoList", JSON.stringify([todo]));
    }
}

saveTodoBtnElement?.addEventListener("click", () => {
    const todoInput = todoInputElement.value;
    if (todoInput) {
        const newTodo: ITodo = {
            id: getRandomInt(1, 999999999),
            name: todoInput
        }

        handleSaveTodoToLocalStorage(newTodo);

        //close modal
        //@ts-ignore
        const createTodoModal = bootstrap.Modal.getOrCreateInstance("#createTodo", {
            keyboard: false
        })
        createTodoModal.hide();

        //clear todo input
        todoInputElement.value = "";
    }
})

