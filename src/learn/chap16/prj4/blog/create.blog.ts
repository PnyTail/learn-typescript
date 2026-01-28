import { createToast, getRandomInt } from "../helper.js";
import { IBlog } from "./blog.js";

const handleCreateBlog = async (blog: IBlog) => {
    const rawResponse = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
    });
}

const handleAddNewRow = (blog: IBlog) => {
    const tableBody = document.querySelector('#tableBlog tbody');

    // Tạo phần tử dòng mới
    const newRow = document.createElement("tr");

    // Gán HTML cho dòng
    newRow.innerHTML = `
        <tr>
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
            <td>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </td>
        </tr>
    `;

    // Thêm dòng vào cuối bảng
    tableBody?.appendChild(newRow);
}

const createBlog = () => {
    const titleInputElement = document.getElementById("titleInput") as HTMLInputElement;
    const authorInputElement = document.getElementById("authorInput") as HTMLInputElement;
    const contentInputElement = document.getElementById("contentInput") as HTMLInputElement;

    const saveBlogBtnElement = document.getElementById("saveBlogBtn");

    saveBlogBtnElement?.addEventListener("click", () => {
        const titleInput = titleInputElement.value;
        const authorInput = authorInputElement.value;
        const contentInput = contentInputElement.value;

        //validate inputs
        if (!titleInput || !authorInput || !contentInput) {
            alert("Please fill in all inputs...");
            return;
        }

        const newBlog: IBlog = {
            id: getRandomInt(1, 999999999),
            title: titleInput,
            author: authorInput,
            content: contentInput
        }

        handleCreateBlog(newBlog);

        //close modal
        //@ts-ignore
        const createBlogModal = bootstrap.Modal.getOrCreateInstance("#createBlog", {
            keyboard: false
        })
        createBlogModal.hide();

        //clear todo input
        titleInputElement.value = "";
        authorInputElement.value = "";
        contentInputElement.value = "";

        //add new row
        handleAddNewRow(newBlog);

        //show toast when create
        createToast("#toastCreateBlog");
    })
}

export { createBlog };