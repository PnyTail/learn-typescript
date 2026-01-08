import { ITodo } from "./main";

/**
 * cách 1
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

export { displayTodosInTable };