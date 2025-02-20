function checkProperty(obj, prop) {
    try {
        let value = obj[prop];
        return value;
    } catch (error) {
        if (error instanceof TypeError) {
            return `TypeError: '${prop}' не существует`;
        } else {
            throw error;
        }
    }
}

let obj1 = { name: "Gregor", age: 52 };
let obj2;

console.log(checkProperty(obj1, "name")); // Gregor
console.log(checkProperty(obj2, "name")); // TypeError: 'name' не существует
