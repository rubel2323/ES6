const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// Using spread with arrays
const combined = [...digits, ...letters];
console.log(combined);

const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Developer", city: "New York" };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// Using spread with functions
const math = Math.max(...digits);
console.log(math);
// Using spread to update object properties
const updatedObj = { ...obj1, age: 26, country: "USA" };
console.log(updatedObj);
