import { ITodo } from "./main";

const DeleteTodo = () => {
    const deleteBtnElementArr = document.querySelectorAll(".delete-btn"); //array
    const todoListStr = localStorage.getItem("todoList");

    deleteBtnElementArr.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const deleteBtnId = btn.getAttribute("data-id") as unknown as number;
            console.log("check delete btn id: ", deleteBtnId)

            if (todoListStr) {
                const todoList = JSON.parse(todoListStr) as ITodo[];

                const newTodoList = todoList.filter((todo) => todo.id != deleteBtnId);

                localStorage.setItem("todoList", JSON.stringify(newTodoList));
            }

            //reload
            window.location.reload();
        })
    })

}

export { DeleteTodo };