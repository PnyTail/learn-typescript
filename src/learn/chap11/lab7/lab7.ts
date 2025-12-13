export { };
console.log("lab 7");
console.log("===================");

interface IBlogs {
    id: number;
    title: string;
    author: string;
    content: string;
}

const tableElement = document.getElementById("blogs");
const tbody = document.querySelector("#blogs tbody");

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json() as IBlogs[];

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

    // console.log("check table: ", data);
}

fetchBlogs();
