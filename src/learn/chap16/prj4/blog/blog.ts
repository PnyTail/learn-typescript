import { createBlog } from "./create.blog.js";
import { deleteBlog } from "./delete.blog.js";
import { actionSubmitModal, updateBlog } from "./update.blog.js";

interface IBlog {
    id: number;
    title: string;
    author: string;
    content: string;
}

const renderTable = (data: IBlog[]) => {
    const tbody = document.querySelector("#tableBlog tbody");
    if (tbody) {
        data.forEach((blog, index) => {
            tbody.innerHTML += `
                <tr>
                    <td>${blog.id}</td>
                    <td>${blog.title}</td>
                    <td>${blog.author}</td>
                    <td>${blog.content}</td>
                    <td>
                        <button 
                            class="btn btn-warning edit-blog"
                            data-update-id="${blog.id}"
                            data-title="${blog.title}"
                            data-author="${blog.author}"
                            data-content="${blog.content}"
                        >
                            Edit
                        </button>
                        <button class="btn btn-danger delete-blog" data-id="${blog.id}">Delete</button>
                    </td>
                </tr>
            `
        })
    }
}

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json() as IBlog[];
    renderTable(data);
}

fetchBlogs().then(() => {
    deleteBlog();
    updateBlog()
});
createBlog();

actionSubmitModal();

console.log("blog.ts")
export { IBlog };
