import { createToast } from "../helper.js";

const handleDeleteBlog = async (id: number) => {
    await fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

}

const deleteBlog = () => {
    const deleteBtnElementArr = document.querySelectorAll(".delete-btn"); //array

    deleteBtnElementArr?.forEach((btn, index) => {
        const btnElement = btn as HTMLButtonElement;
        btnElement.addEventListener("click", async () => {
            const id = btnElement.getAttribute("data-id") as unknown as number;

            // delete blog
            if (id) {
                await handleDeleteBlog(id);

                //delete row
                const row = btnElement.closest("tr");
                row?.remove();

                //show toast when delete
                createToast("#toastDeleteBlog");
            }
        })
    })
}

export { deleteBlog, handleDeleteBlog };