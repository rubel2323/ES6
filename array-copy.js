const arr = [1, 2, 3, 4, 5];
const anotherArr = [...arr];
console.log(anotherArr);
// Copying an array using slice
const arrCopy1 = arr.slice();
console.log(arrCopy1);
// Copying an array using concat
const arrCopy2 = [].concat(arr);
console.log(arrCopy2);
// Copying an array using spread operator
const arrCopy3 = [...arr];
console.log(arrCopy3);
// Modifying the copied array to show it's a separate instance
arrCopy3.push(6);
console.log("Original array:", arr);
console.log("Modified copy:", arrCopy3);

const structuredCloneCopy = structuredClone(arr);
console.log(structuredCloneCopy);
