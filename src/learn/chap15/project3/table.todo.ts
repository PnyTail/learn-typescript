import { ITodo } from "./main";

// cách 2
const displayTable = () => {
    const tableBody = document.querySelector("#todosTable tbody");

    const todoListStr = localStorage.getItem("todoList");
    if (todoListStr && tableBody) {
        const todoList = JSON.parse(todoListStr) as ITodo[];

        todoList.forEach((todo, index) => {
            tableBody.innerHTML += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${todo.id}</td>
                    <td>${todo.name}</td>
                    <td>
                        <button class="btn btn-danger delete-btn" data-id="${todo.id}">Delete</button>
                    </td>
                </tr>
            `
        })
    }
}

export { displayTable };