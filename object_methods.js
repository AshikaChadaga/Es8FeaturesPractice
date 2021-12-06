const student = {
    firstName: 'Ashika',
    lastName: 'Chadaga',
    getfullName() {
        return this.firstName + ':' + this.lastName
    }
}
console.log(Object.entries(student));
console.log(Object.values(student));
//Details such as its value, if it is writable, enumerable, configurable
console.log(Object.getOwnPropertyDescriptors(student));

const marks = [10, 20, 30, 40];
console.log(Object.entries(marks));
console.log(Object.values(marks));

