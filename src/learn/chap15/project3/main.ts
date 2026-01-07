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

        //reload
        window.location.reload();
    }
})

/**
 * https://stackoverflow.com/questions/18333427/how-to-insert-a-row-in-an-html-table-body-in-javascript
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement
 * 
*/
const displayTodosInTable = () => {
    const tableTodos = document.getElementById("todosTable") as HTMLTableElement;
    // const tableTodosBody = document.getElementById("todosTable")?.getElementsByTagName("tbody")[0];
    // tableTodosBody.appendChild()

    const localTodos = localStorage.getItem("todoList");

    // check toto localStorage
    if (localTodos) {

        const todosArr = JSON.parse(localTodos) as ITodo[];
        console.log(">>check local todos: ", todosArr)
        for (let i = 0; i < todosArr.length; i++) {
            tableTodos.tBodies[0].innerHTML += `
                <tr>
                    <th scope="row">${i + 1}</th>
                    <td>${todosArr[i].id}</td>
                    <td>${todosArr[i].name}</td>
                    <td>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            `;
        }
    }
}
displayTodosInTable();

