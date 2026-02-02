import { createToast } from "../helper.js";

const handleDeleteBlog = async (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener("click", async () => {
        const id = btnElement.getAttribute("data-id");
        if (id) {
            await fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            //delete row
            const row = btnElement.closest("tr");
            row?.remove();

            //show toast when delete
            createToast("#toastDeleteBlog");
        }
    })
}

const deleteBlog = () => {
    const deleteBtnElementArr = document.querySelectorAll(".delete-blog"); //array

    if (deleteBtnElementArr) {
        deleteBtnElementArr.forEach((btn, index) => {
            const btnElement = btn as HTMLButtonElement;
            handleDeleteBlog(btnElement)
        })
    }
}

export { deleteBlog, handleDeleteBlog };