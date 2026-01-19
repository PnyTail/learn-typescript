export { };
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
                    <th scope="row">${index + 1}</th>
                    <td>${blog.id}</td>
                    <td>${blog.title}</td>
                    <td>${blog.author}</td>
                    <td>${blog.content}</td>
                    <td>
                        <button class="btn btn-warning">Edit</button>
                        <button class="btn btn-danger">Delete</button>
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

fetchBlogs();

console.log("blog.ts")
