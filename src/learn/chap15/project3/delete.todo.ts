import { ITodo } from "./main";

const deleteTodoFromLocalStorage = (id: number) => {
    const todoListStr = localStorage.getItem("todoList");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr) as ITodo[];

        const newTodoList = todoList.filter(todo => todo.id != id);

        localStorage.setItem("todoList", JSON.stringify(newTodoList));

        //reload
        window.location.reload();
    }
}

const DeleteTodo = () => {
    const deleteBtnElementArr = document.querySelectorAll(".delete-btn"); //array   

    deleteBtnElementArr?.forEach((btn, index) => {
        const btnElement = btn as HTMLButtonElement;
        btnElement.addEventListener("click", () => {
            const id = btnElement.getAttribute("data-id");

            // delete todo
            if (id) {
                deleteTodoFromLocalStorage(+id); //add plus sign to convert string to number
            }
        })
    })

}

export { DeleteTodo };