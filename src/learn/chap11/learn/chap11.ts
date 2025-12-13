export { };
console.log("vid 107");

interface IUser {
    id: number;
    name: string;
    email: string;
}

const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    // const data = (await res.json()) as IUser[]; //cách 1
    const data: IUser[] = await res.json(); // cách 2

    console.log("check data: ", data);
}

fetchUsers();