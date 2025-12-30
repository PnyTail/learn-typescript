import { getRandomInt } from "./helper.js";

console.log("project 3");

interface ITodo {
    id: number;
    name: string;
}

const todoInputElement = document.getElementById("todoInput") as HTMLInputElement;

//saveTodoBtn
const saveTodoBtnElement = document.getElementById("saveTodoBtn");

saveTodoBtnElement?.addEventListener("click", () => {
    const todoInput = todoInputElement.value;

    const todoListArr: ITodo[] = [
        {
            id: getRandomInt(1, 999999999),
            name: todoInput
        }
    ]

    let localData = localStorage.getItem("todoList");
    let todoList: ITodo[] = [];

    if (localData) {
        todoList = JSON.parse(localData);
        // todoList.push(todoListArr); //nếu như để todoListArr là obj thay vì mảng
        todoList = [...todoList, ...todoListArr];
    } else {
        // todoList.push(todoListArr); //nếu như để todoListArr là obj thay vì mảng
        todoList = [...todoListArr];
    }

    localStorage.setItem("todoList", JSON.stringify(todoList));
    window.location.reload();
})

