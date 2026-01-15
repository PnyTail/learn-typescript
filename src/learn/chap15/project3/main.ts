import { displayTable } from "./table.todo.js";
import { getRandomInt } from "./helper.js";
import { displayTodosInTable } from "./display.table.todo.js";
import { DeleteTodo } from "./delete.todo.js";
declare const bootstrap: any;

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

        const tableBody = document.getElementById("todosTable tbody");
        const newRow = document.createElement("tr");

        let tbodyRowCount = (document.getElementById("todosTable") as HTMLTableElement).rows.length;
        newRow.innerHTML = `
            <th scope="row">${tbodyRowCount}</th>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td>
                <button class="btn btn-danger delete-btn" data-id="${todo.id}">Delete</button>
            </td>
        `;

        // Thêm dòng vào cuối bảng
        tableBody?.appendChild(newRow);

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

        //reload
        // window.location.reload();


        //show toast
        const toastDiv = document.getElementById('toastCreate');
        const toast = new bootstrap.Toast(toastDiv)
        toast.show()
    }
})

// displayTodosInTable();
displayTable();
DeleteTodo();

export { ITodo };
