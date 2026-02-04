const students = { name: "Alice", age: 20, major: "Computer Science" };

console.log(students.name);
const { name, age, major } = students;
const { name: studentNames, age: studentAge, major: studentMajor } = students;

console.log(`Name: ${studentNames}`);
console.log(studentNames);
console.log(studentAge);
console.log(studentMajor);
