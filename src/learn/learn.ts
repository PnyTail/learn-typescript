export { };
// vid 102

// intersection types

type TUsername = string | number; //union type => dùng toán tử hoặc

type TStudent = {
    id: number;
    name: string;
}

type TCoder = {
    address: string;
    language: string;
}

// intersection types
type TProgrammer = TStudent & TCoder; //cộng gộp type, tái sử dụng code cũ

const it96: TProgrammer = {
    id: 124,
    name: "Nam",
    address: "HCM",
    language: "Typescript"
};

let username: TUsername = "Nam";
username = 123;