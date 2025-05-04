// Never Type

const handleException = (errorMessage: string): never => {
    throw Error(errorMessage);
}

// handleException("This is an error message");

// void trả về undefined
// never không trả về gì cả

const test = (): void => {

}

let a = test(); // undefined
console.log(">> check a : ", a); // undefined