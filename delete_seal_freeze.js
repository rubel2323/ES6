const teachers = { name: "william", age: 30, job: "developer" };
Object.seal(teachers);
delete teachers.age;

teachers.age = teachers.age + 10;
console.log(teachers);
delete teachers.age;
console.log(teachers);
teachers.job = "manager";
console.log(teachers);
