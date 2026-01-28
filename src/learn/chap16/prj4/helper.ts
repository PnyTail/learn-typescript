declare const bootstrap: any;

//random number
const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createToast = (name: string) => {
    const toast = new bootstrap.Toast(name);
    toast.show()
}

export { getRandomInt, createToast };