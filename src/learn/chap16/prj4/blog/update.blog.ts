import { handleDeleteBlog } from "./delete.blog.js";

declare const bootstrap: any;

const modalUpdateBlog = bootstrap.Modal.getOrCreateInstance('#modalUpdateBlog', {});

const handleUpdateBlog = (btnElement: HTMLButtonElement, openModal?: boolean) => {
    //nhấn vào nút edit phải chờ điền thông tin rồi click btn mới update
    if (openModal) {
        btnElement.addEventListener("click", () => {
            modalUpdateBlog.show();
        })
    }

    //get value from html attribute
    const updateId = btnElement.getAttribute("data-update-id")!;
    const updateTitle = btnElement.getAttribute("data-title")!;
    const updateAuthor = btnElement.getAttribute("data-author")!;
    const updateContent = btnElement.getAttribute("data-content")!;

    const titleUpdateInput = document.getElementById("titleUpdate") as HTMLInputElement;
    const authorUpdateInput = document.getElementById("authorUpdate") as HTMLInputElement;
    const contentUpdateInput = document.getElementById("contentUpdate") as HTMLInputElement;

    //assign current value to input
    titleUpdateInput.value = updateTitle;
    authorUpdateInput.value = updateAuthor;
    contentUpdateInput.value = updateContent;

    //save blog update btn
    const updateBlogSaveBtnElement = document.getElementById("updateBlogBtn") as HTMLButtonElement;
    updateBlogSaveBtnElement.addEventListener("click", async () => {
        //new value
        const titleUpdateValue = titleUpdateInput.value;
        const authorUpdateValue = authorUpdateInput.value;
        const contentUpdateValue = contentUpdateInput.value;

        await fetch(`http://localhost:8000/blogs/${updateId}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: titleUpdateValue, author: authorUpdateValue, content: contentUpdateValue })
        });

        modalUpdateBlog.hide();
        // modalUpdateBlog.dispose(); //clear data
        window.location.reload();
    })
}

const updateBlog = () => {
    const updateBlogBtns = document.querySelectorAll(".edit-blog");
    updateBlogBtns?.forEach((btn, index) => {
        const btnElement = btn as HTMLButtonElement
        btnElement.addEventListener("click", () => {
            modalUpdateBlog.show();
            handleUpdateBlog(btnElement);
        })
    })
}

export { updateBlog, handleUpdateBlog };