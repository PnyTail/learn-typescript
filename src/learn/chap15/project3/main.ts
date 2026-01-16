import { displayTable } from "./table.todo.js";
import { createToast, getRandomInt } from "./helper.js";
import { displayTodosInTable } from "./display.table.todo.js";
import { DeleteTodo, deleteTodoFromLocalStorage } from "./delete.todo.js";

console.log("project 3");

interface ITodo {
    id: number;
    name: string;
}

const todoInputElement = document.getElementById("todoInput") as HTMLInputElement;

//saveTodoBtn
const saveTodoBtnElement = document.getElementById("saveTodoBtn");

const handleAddNewRow = (todo: ITodo) => {
    const tableBody = document.querySelector('#todosTable tbody')!;
    const todoListStr = localStorage.getItem("todoList");
    let index = 0;
    if (todoListStr) {
        index = (JSON.parse(todoListStr) as ITodo[]).length;
    }

    // Tạo phần tử dòng mới
    const newRow = document.createElement("tr");

    // Gán HTML cho dòng
    newRow.innerHTML = `
        <tr>
            <th scope="row">${index}</th>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td>
                <button class="btn btn-danger delete-btn" data-id="${todo.id}">Delete</button>
            </td>
        </tr>
    `;

    // Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow);

    //gán sự kiện onclick cho row vừa tạo
    const btnElement = document.querySelector(`[data-id="${todo.id}"]`)!;

    btnElement.addEventListener("click", () => {
        const id = btnElement.getAttribute("data-id") as unknown as number;

        // delete todo
        if (id) {
            deleteTodoFromLocalStorage(+id); //add plus sign to convert string to number

            //delete row
            const row = btnElement.closest("tr");
            row?.remove();

            //show toast when delete
            createToast("#toastDelete");
        }
    })
}

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

        handleAddNewRow(newTodo);

        //show toast when create
        createToast("#toastCreate");
    }
})

// displayTodosInTable();
displayTable();
DeleteTodo();

export { ITodo };
