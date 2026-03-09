import { createToast } from "../helper.js";
import { handleAddNewRow } from "./create.blog.js";

declare const bootstrap: any;

const actionSubmitModal = () => {
    const updateBtn = document.getElementById("updateBlogBtn");
    updateBtn?.addEventListener("click", async () => {

        //cal API update
        const idElement = document.getElementById("idUpdate") as HTMLInputElement;
        const titleUpdateInput = document.getElementById("titleUpdate") as HTMLInputElement;
        const authorUpdateInput = document.getElementById("authorUpdate") as HTMLInputElement;
        const contentUpdateInput = document.getElementById("contentUpdate") as HTMLInputElement;

        await fetch(`http://localhost:8000/blogs/${idElement.value}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: titleUpdateInput.value,
                author: authorUpdateInput.value,
                content: contentUpdateInput.value
            })
        });

        //update row, remove current row, and add new row
        const btnUpdateElement = document.querySelector(`[data-update-id="${idElement.value}"]`)!;
        const row = btnUpdateElement.closest("tr");
        row?.remove();

        handleAddNewRow({
            id: +idElement.value,
            title: titleUpdateInput.value,
            author: authorUpdateInput.value,
            content: contentUpdateInput.value
        })

        //close modal update
        const modalUpdateBlog = bootstrap.Modal.getOrCreateInstance('#modalUpdateBlog', {
            keyboard: false
        });
        modalUpdateBlog.hide();

        //show toast
        createToast("#toastUpdateBlog");
    })
}

const handleUpdateBlog = (btnElement: HTMLButtonElement) => {
    //nhấn vào nút edit phải chờ điền thông tin rồi click btn mới update

    btnElement.addEventListener("click", async () => {
        //set default input value
        const idElement = document.getElementById("idUpdate") as HTMLInputElement;
        const titleUpdateInput = document.getElementById("titleUpdate") as HTMLInputElement;
        const authorUpdateInput = document.getElementById("authorUpdate") as HTMLInputElement;
        const contentUpdateInput = document.getElementById("contentUpdate") as HTMLInputElement;

        //assign current value to input
        idElement.value = btnElement.getAttribute("data-update-id")!;
        titleUpdateInput.value = btnElement.getAttribute("data-title")!;
        authorUpdateInput.value = btnElement.getAttribute("data-author")!;
        contentUpdateInput.value = btnElement.getAttribute("data-content")!;

        //show modal update
        const modalUpdateBlog = bootstrap.Modal.getOrCreateInstance('#modalUpdateBlog', {
            keyboard: false
        });
        modalUpdateBlog.show();
    })
}

const updateBlog = () => {
    const updateBlogBtns = document.querySelectorAll(".edit-blog");
    updateBlogBtns?.forEach((btn, index) => {
        const btnElement = btn as HTMLButtonElement
        handleUpdateBlog(btnElement);
    })
}

export { updateBlog, handleUpdateBlog, actionSubmitModal };