export { };
console.log("vid 129");

interface IDataString {
    data: string;
}

interface IDataNumber {
    data: number;
}

interface IData<T> {
    data: T;
}

const a1: IData<string> = { data: "tha thu" };

const a2: IData<number> = { data: 541 };

interface IAPIResponse<T> {
    status: number;
    data: T
}

interface IUser {
    id: number;
    name: string;
    email: string
}

const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    const dataAPI = await res.json() as IUser[];

    const result: IAPIResponse<IUser[]> = {
        status: 200,
        data: dataAPI
    }

    result.data.map(item => item.email);
}