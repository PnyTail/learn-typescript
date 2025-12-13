export { };
console.log("lab 7");
console.log("===================");

interface IBlog {
    id: number;
    title: string;
    author: string;
    content: string;
}

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json() as IBlog[];
    const tbody = document.querySelector("#blogs tbody");

    // check lại hình thù data (dùng thư viện: joi, zod, ...)

    if (data && data.length) {
        data.forEach((blog) => {
            tbody!.innerHTML += `
                <tr>
                    <td>${blog.id}</td>
                    <td>${blog.title}</td>
                    <td>${blog.author}</td>
                    <td>${blog.content}</td>
                </tr>
            `
        })
    }
}

fetchBlogs();
